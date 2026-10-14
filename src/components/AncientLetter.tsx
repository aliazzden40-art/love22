import { useState } from 'react';
import { ArabesqueDivider, ManuscriptCorner, ManuscriptSeal } from './ManuscriptDecorations';
import { ANCIENT_LETTER } from '../data/diwanData';
import { Copy, Check, Sparkles } from 'lucide-react';
import { FadeInView } from './FadeInView';

import parchmentTexturePath from '../assets/images/ancient_parchment_leaf_1791929467613.jpg';

interface AncientLetterProps {
  onShowToast?: (msg: string) => void;
}

export function AncientLetter({ onShowToast }: AncientLetterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLetter = () => {
    const fullText = [
      ANCIENT_LETTER.traditionalOpening,
      ANCIENT_LETTER.salutation,
      ...ANCIENT_LETTER.bodyParagraphs,
      ANCIENT_LETTER.closing,
      ANCIENT_LETTER.signature,
      ANCIENT_LETTER.dateStamp,
    ].join('\n\n');

    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      onShowToast?.("تَمَّ نَسْخُ رِسَالَةِ الأَزَلِ بِمَشَاعِرِهَا الخَالِدَة");
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section id="letter" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-[#F3E8D2]/35">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <FadeInView className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-naskh text-[#B08D57] tracking-widest mb-2">
            <span>البَابُ الثَّانِي</span>
            <span>·</span>
            <span>رِسَالَةُ الأَزَل</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-amiri font-bold text-[#244C38] mb-3">
            {ANCIENT_LETTER.heading}
          </h2>
          <p className="text-sm sm:text-base font-naskh text-[#59402E]">
            {ANCIENT_LETTER.subheading}
          </p>
          <ArabesqueDivider className="my-4" />
        </FadeInView>

        {/* The Ancient Manuscript Parchment Scroll Container with Slow Gold Glow */}
        <FadeInView delayMs={150} className="relative bg-[#FFF9EF] rounded-2xl shadow-xl border border-[#B08D57]/45 p-6 sm:p-12 lg:p-16 manuscript-border manuscript-gold-glow overflow-hidden">
          {/* Subtle archival watermark background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-multiply overflow-hidden">
            <img
              src={parchmentTexturePath}
              alt="أثر الرق القديم"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* 4 Manuscript Gold Corners */}
          <ManuscriptCorner className="absolute top-3 right-3" />
          <ManuscriptCorner className="absolute top-3 left-3 -rotate-90" />
          <ManuscriptCorner className="absolute bottom-3 right-3 rotate-90" />
          <ManuscriptCorner className="absolute bottom-3 left-3 rotate-180" />

          {/* Letter Action Bar: Copy Letter */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#B08D57]/20 text-xs font-naskh text-[#59402E]">
            <div className="flex items-center gap-1.5 text-[#B08D57]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>مَخْطُوطَةٌ بَاقِيَةٌ عَلَى مَرِّ العُصُور</span>
            </div>
            <button
              onClick={handleCopyLetter}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-[#B08D57]/30 bg-[#F3E8D2]/40 text-[#30271F] hover:bg-[#B08D57]/20 transition-colors cursor-pointer"
              title="نسخ نص الرسالة كاملاً"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#376B51]" />
                  <span className="text-[#376B51]">تَمَّ نَسْخُ الرِّسَالَة</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#59402E]" />
                  <span>نَسْخُ المَخْطُوط</span>
                </>
              )}
            </button>
          </div>

          {/* Traditional Arabic Manuscript Opening (Basmala & Hamdala) */}
          <div className="text-center mb-8">
            <p className="text-sm sm:text-base font-naskh font-medium text-[#B08D57] leading-relaxed">
              {ANCIENT_LETTER.traditionalOpening}
            </p>
          </div>

          {/* Poetic Salutation */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-amiri font-bold text-[#244C38]">
              {ANCIENT_LETTER.salutation}
            </h3>
          </div>

          {/* The Rich Body Paragraphs */}
          <div className="space-y-7 text-base sm:text-lg lg:text-xl font-amiri leading-loose text-[#30271F] text-justify">
            {ANCIENT_LETTER.bodyParagraphs.map((para, idx) => (
              <p key={idx} className="indent-6 sm:indent-8">
                {para}
              </p>
            ))}
          </div>

          {/* Heartfelt Closing */}
          <div className="mt-10 pt-6 border-t border-[#B08D57]/20">
            <p className="text-lg sm:text-xl font-amiri font-bold text-[#244C38] leading-relaxed mb-6">
              «{ANCIENT_LETTER.closing}»
            </p>

            {/* Signature & Seal of Ali */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-8">
              <div>
                <p className="text-base sm:text-lg font-ruqaa font-bold text-[#59402E]">
                  {ANCIENT_LETTER.signature}
                </p>
                <p className="text-xs font-naskh text-[#B08D57] mt-1">
                  {ANCIENT_LETTER.dateStamp}
                </p>
              </div>

              {/* Manuscript Traditional Seal */}
              <div className="self-end sm:self-auto">
                <ManuscriptSeal text="عَلِيّ" />
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
