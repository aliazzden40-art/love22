import { useState, useEffect } from 'react';
import { ArrowUp, BookOpen, Share2 } from 'lucide-react';
import { DIWAN_INFO } from '../data/diwanData';

interface FloatingLiteraryToolbarProps {
  onOpenReader: () => void;
  onShowToast: (msg: string) => void;
}

export function FloatingLiteraryToolbar({ onOpenReader, onShowToast }: FloatingLiteraryToolbarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    const textToShare = `${DIWAN_INFO.title}\n${DIWAN_INFO.mainSubtitle}\n${DIWAN_INFO.dedicationNote}`;
    navigator.clipboard.writeText(textToShare).then(() => {
      onShowToast("تَمَّ نَسْخُ إِهْدَاءِ الدِّيوَانِ الشَّرِيف");
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="أدوات الديوان السريعة"
      className="fixed bottom-5 left-5 z-40 flex items-center gap-2 p-1.5 rounded-full bg-[#FFF9EF]/95 backdrop-blur-md border border-[#B08D57]/40 shadow-xl transition-all duration-300"
    >
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        type="button"
        className="w-9 h-9 flex items-center justify-center rounded-full text-[#59402E] hover:text-[#244C38] hover:bg-[#F3E8D2] transition-colors cursor-pointer"
        title="الصعود إلى فاتحة الديوان"
        aria-label="الصعود إلى فاتحة الديوان"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Quick Manuscript Reader */}
      <button
        onClick={onOpenReader}
        type="button"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium font-naskh text-[#244C38] hover:bg-[#F3E8D2] rounded-full transition-colors cursor-pointer"
        title="فتح قارئ المخطوط المفرّد"
      >
        <BookOpen className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">قارئ المخطوط</span>
      </button>

      {/* Share / Copy Dedication */}
      <button
        onClick={handleShare}
        type="button"
        className="w-9 h-9 flex items-center justify-center rounded-full text-[#59402E] hover:text-[#244C38] hover:bg-[#F3E8D2] transition-colors cursor-pointer"
        title="نسخ إهداء الديوان"
        aria-label="نسخ إهداء الديوان"
      >
        <Share2 className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
