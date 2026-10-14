import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * صوت أثيري خافت مستوحى من نسيم الواحة وخرير الماء الهادئ عبر Web Audio API
 * يعمل بمجرد نقر الزائر دون أي ملفات خارجية قابلة للتعطل
 */
export function AudioAmbiance() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const timerRef = useRef<number | null>(null);

  const startAmbiance = async () => {
    try {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtxClass) {
        setIsPlaying(false);
        return;
      }
      const ctx = new AudioCtxClass();
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }
      audioCtxRef.current = ctx;

      // Master gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 1. Soft wind noise generator (pink noise approximation for palm breeze)
      const bufferSize = ctx.sampleRate * 4;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.06;
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Bandpass filter to make it sound like gentle wind through palm fronds
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);
      filter.Q.setValueAtTime(1.8, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(masterGain);
      whiteNoise.start();
      noiseSourceRef.current = whiteNoise;

      // 2. Soft water trickle simulation: gentle droplet resonance
      const playDroplet = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const dropOsc = ctx.createOscillator();
        const dropGain = ctx.createGain();

        // Pentatonic warm frequency
        const freqs = [587.33, 659.25, 783.99, 880.00, 1046.50];
        const freq = freqs[Math.floor(Math.random() * freqs.length)];

        dropOsc.type = 'sine';
        dropOsc.frequency.setValueAtTime(freq, ctx.currentTime);
        dropOsc.frequency.exponentialRampToValueAtTime(freq * 0.85, ctx.currentTime + 0.3);

        dropGain.gain.setValueAtTime(0.0001, ctx.currentTime);
        dropGain.gain.linearRampToValueAtTime(0.02, ctx.currentTime + 0.03);
        dropGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);

        dropOsc.connect(dropGain);
        dropGain.connect(masterGain);

        dropOsc.start();
        dropOsc.stop(ctx.currentTime + 0.4);

        const nextDelay = 1800 + Math.random() * 3200;
        timerRef.current = window.setTimeout(playDroplet, nextDelay);
      };

      playDroplet();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const stopAmbiance = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.linearRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.5);
      setTimeout(() => {
        try {
          audioCtxRef.current?.close();
        } catch {}
        audioCtxRef.current = null;
        setIsPlaying(false);
      }, 500);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleAmbiance = () => {
    if (isPlaying) {
      stopAmbiance();
    } else {
      startAmbiance();
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      try {
        audioCtxRef.current?.close();
      } catch {}
    };
  }, []);

  return (
    <button
      onClick={toggleAmbiance}
      type="button"
      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded border border-[#B08D57]/30 bg-[#FFF9EF]/80 text-[#30271F] hover:bg-[#F3E8D2] hover:text-[#244C38] transition-colors whitespace-nowrap cursor-pointer shadow-xs"
      title={isPlaying ? "إيقاف صوت نسيم الواحة" : "تشغيل صوت نسيم الواحة الخافت"}
      aria-label={isPlaying ? "إيقاف صوت نسيم الواحة" : "تشغيل صوت نسيم الواحة الخافت"}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#376B51]" />
          <span>صوت الواحة: يَسْرِي</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-[#59402E]" />
          <span>صوت الواحة: صَامِت</span>
        </>
      )}
    </button>
  );
}
