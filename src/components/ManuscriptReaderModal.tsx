import { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, ZoomIn, ZoomOut, BookOpen, Feather } from 'lucide-react';
import { WORDS_FOR_RAYAN, ANCIENT_LETTER, GHAZAL_POEM, OASIS_OF_EYES, CHRONICLE, CLOSING_PAGE } from '../data/diwanData';
import { ManuscriptCorner, ArabesqueDivider } from './ManuscriptDecorations';

interface ManuscriptReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ManuscriptReaderModal({ isOpen, onClose }: ManuscriptReaderModalProps) {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [fontSizeClass, setFontSizeClass] = useState<'text-base' | 'text-lg' | 'text-xl'>('text-lg');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && activePageIndex > 0) setActivePageIndex((p) => p - 1);
      if (e.key === 'ArrowLeft' && activePageIndex < 5) setActivePageIndex((p) => p + 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activePageIndex, onClose]);

  if (!isOpen) return null;

  const pages = [
    {
      title: "فَاتِحَةُ الدِّيوَان",
      chapterNum: "الصَّفْحَةُ الأُولَى",
      content: (
        <div className="space-y-6">
          <div className="text-center pb-4 mb-6 border-b border-[#B08D57]/20">
            <h3 className="text-2xl font-amiri font-bold text-[#244C38] mb-2">{WORDS_FOR_RAYAN.heading}</h3>
            <p className="text-sm font-naskh text-[#59402E]">{WORDS_FOR_RAYAN.subheading}</p>
          </div>
          <blockquote className="bg-[#F3E8D2]/50 p-4 rounded-lg border-r-2 border-[#B08D57] text-xl font-amiri font-bold text-[#244C38] text-center">
            «{WORDS_FOR_RAYAN.openingAddress}»
          </blockquote>
          <div className="space-y-5 text-justify leading-loose font-amiri">
            {WORDS_FOR_RAYAN.paragraphs.map((p, i) => (
              <p key={i} className="indent-6">{p}</p>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "رِسَالَةُ الأَزَل",
      chapterNum: "الصَّفْحَةُ الثَّانِيَة",
      content: (
        <div className="space-y-6">
          <div className="text-center pb-4 mb-6 border-b border-[#B08D57]/20">
            <h3 className="text-2xl font-amiri font-bold text-[#244C38] mb-1">{ANCIENT_LETTER.heading}</h3>
            <p className="text-xs font-naskh text-[#B08D57]">{ANCIENT_LETTER.traditionalOpening}</p>
          </div>
          <h4 className="text-lg font-amiri font-bold text-[#244C38]">{ANCIENT_LETTER.salutation}</h4>
          <div className="space-y-5 text-justify leading-loose font-amiri">
            {ANCIENT_LETTER.bodyParagraphs.map((p, i) => (
              <p key={i} className="indent-6">{p}</p>
            ))}
          </div>
          <div className="pt-4 border-t border-[#B08D57]/20 flex justify-between items-center text-sm font-amiri font-bold text-[#244C38]">
            <span>«{ANCIENT_LETTER.closing}»</span>
            <span className="font-ruqaa text-[#59402E]">{ANCIENT_LETTER.signature}</span>
          </div>
        </div>
      ),
    },
    {
      title: "قَصِيدَةُ الغَزَل",
      chapterNum: "الصَّفْحَةُ الثَّالِثَة",
      content: (
        <div className="space-y-6">
          <div className="text-center pb-4 mb-4 border-b border-[#B08D57]/20">
            <h3 className="text-2xl font-amiri font-bold text-[#244C38] mb-1">فِي ظِلَالِ النَّخِيل</h3>
            <p className="text-xs font-naskh text-[#59402E]">اثنا عشر بيتًا على بحر الوافر مهداة إلى رَيَّان</p>
          </div>
          <div className="space-y-4">
            {GHAZAL_POEM.map((verse, idx) => (
              <div key={idx} className="p-2 border-b border-[#B08D57]/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-center font-amiri font-bold text-[#244C38]">
                <span className="sm:text-right">{verse.firstHemistich}</span>
                <span className="text-xs font-naskh text-[#B08D57] hidden sm:inline">···</span>
                <span className="sm:text-left text-[#30271F]">{verse.secondHemistich}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "وَاحَةُ العَيْنَيْن",
      chapterNum: "الصَّفْحَةُ الرَّابِعَة",
      content: (
        <div className="space-y-6">
          <div className="text-center pb-4 mb-6 border-b border-[#B08D57]/20">
            <h3 className="text-2xl font-amiri font-bold text-[#244C38] mb-1">{OASIS_OF_EYES.heading}</h3>
            <p className="text-sm font-naskh text-[#59402E]">{OASIS_OF_EYES.subheading}</p>
          </div>
          <p className="text-lg font-amiri leading-loose text-justify indent-6">
            {OASIS_OF_EYES.mainReflection}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            {OASIS_OF_EYES.aspects.map((asp) => (
              <div key={asp.id} className="p-3 bg-[#F3E8D2]/40 rounded border border-[#B08D57]/20 text-center">
                <span className="block font-amiri font-bold text-[#244C38] mb-1">{asp.title}</span>
                <p className="text-xs font-amiri text-[#30271F]">{asp.text}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "تَأْرِيخُ اللِّقَاء",
      chapterNum: "الصَّفْحَةُ الخَامِسَة",
      content: (
        <div className="space-y-6">
          <div className="text-center pb-4 mb-6 border-b border-[#B08D57]/20">
            <h3 className="text-2xl font-amiri font-bold text-[#244C38] mb-1">{CHRONICLE.heading}</h3>
            <p className="text-sm font-naskh text-[#59402E]">{CHRONICLE.subheading}</p>
          </div>
          <div className="text-center py-4 bg-[#F3E8D2]/50 rounded-lg border border-[#B08D57]/30">
            <span className="text-2xl sm:text-3xl font-amiri font-bold text-[#244C38]">٨ يناير ٢٠٢٦</span>
            <span className="block text-xs font-naskh text-[#59402E] mt-1">يوم بدأت الحكاية وتلاقت الأرواح</span>
          </div>
          <div className="space-y-4 text-justify font-amiri leading-loose">
            {CHRONICLE.prose.map((p, i) => (
              <p key={i} className="indent-6">{p}</p>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "خَاتِمَةُ الدِّيوَان",
      chapterNum: "الصَّفْحَةُ السَّادِسَة",
      content: (
        <div className="space-y-6 text-center">
          <div className="pb-4 mb-6 border-b border-[#B08D57]/20">
            <h3 className="text-2xl font-amiri font-bold text-[#244C38] mb-1">{CLOSING_PAGE.heading}</h3>
            <p className="text-sm font-naskh text-[#59402E]">{CLOSING_PAGE.subheading}</p>
          </div>
          <p className="text-lg font-amiri leading-loose max-w-xl mx-auto text-justify sm:text-center">
            {CLOSING_PAGE.finalProse}
          </p>
          <div className="bg-[#F3E8D2]/60 p-6 rounded-xl border border-[#B08D57]/30 max-w-md mx-auto my-6">
            <div className="text-xl font-amiri font-bold text-[#244C38] mb-2">{CLOSING_PAGE.couplet.first}</div>
            <div className="text-xl font-amiri font-bold text-[#59402E]">{CLOSING_PAGE.couplet.second}</div>
          </div>
          <div className="pt-6 border-t border-[#B08D57]/20">
            <div className="text-2xl font-amiri font-bold text-[#244C38] mb-2">{CLOSING_PAGE.signature}</div>
            <div className="text-xs font-naskh text-[#59402E]">{CLOSING_PAGE.manuscriptSeal}</div>
          </div>
        </div>
      ),
    },
  ];

  const currentPage = pages[activePageIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#30271F]/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="قارئ المخطوط الكلاسيكي"
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#FFF9EF] rounded-2xl shadow-2xl border border-[#B08D57]/50 overflow-hidden manuscript-border manuscript-gold-glow">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#B08D57]/25 bg-[#F3E8D2]/40">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#244C38]" />
            <span className="text-sm font-naskh font-bold text-[#244C38]">
              قَارِئُ المَخْطُوط · {currentPage.chapterNum}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Font size adjustment */}
            <div className="flex items-center gap-1 bg-[#FFF9EF] rounded-md border border-[#B08D57]/30 px-1.5 py-0.5">
              <button
                onClick={() => setFontSizeClass('text-base')}
                className={`px-1.5 py-0.5 text-xs font-naskh rounded ${fontSizeClass === 'text-base' ? 'bg-[#244C38] text-white' : 'text-[#59402E]'}`}
                title="خط عادي"
              >
                ص
              </button>
              <button
                onClick={() => setFontSizeClass('text-lg')}
                className={`px-1.5 py-0.5 text-xs font-naskh rounded ${fontSizeClass === 'text-lg' ? 'bg-[#244C38] text-white' : 'text-[#59402E]'}`}
                title="خط متوسط"
              >
                م
              </button>
              <button
                onClick={() => setFontSizeClass('text-xl')}
                className={`px-1.5 py-0.5 text-xs font-naskh rounded ${fontSizeClass === 'text-xl' ? 'bg-[#244C38] text-white' : 'text-[#59402E]'}`}
                title="خط كبير"
              >
                ك
              </button>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="p-1 text-[#59402E] hover:text-[#244C38] rounded-md transition-colors cursor-pointer"
              aria-label="إغلاق قارئ المخطوط"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Manuscript Page Body */}
        <div className={`p-6 sm:p-10 overflow-y-auto flex-1 ${fontSizeClass} text-[#30271F]`}>
          <ManuscriptCorner className="absolute top-14 right-4" />
          <ManuscriptCorner className="absolute top-14 left-4 -rotate-90" />
          {currentPage.content}
        </div>

        {/* Bottom Pagination & Navigation Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-[#B08D57]/25 bg-[#F3E8D2]/40 text-xs font-naskh">
          <button
            onClick={() => setActivePageIndex((p) => Math.max(0, p - 1))}
            disabled={activePageIndex === 0}
            type="button"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-[#B08D57]/30 bg-[#FFF9EF] text-[#30271F] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#F3E8D2] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
            <span>الصَّفْحَةُ السَّابِقَة</span>
          </button>

          <span className="text-[#59402E] font-medium">
            {activePageIndex + 1} مِنْ {pages.length}
          </span>

          <button
            onClick={() => setActivePageIndex((p) => Math.min(pages.length - 1, p + 1))}
            disabled={activePageIndex === pages.length - 1}
            type="button"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-[#B08D57]/30 bg-[#FFF9EF] text-[#30271F] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#F3E8D2] transition-colors cursor-pointer"
          >
            <span>الصَّفْحَةُ التَّالِيَة</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
