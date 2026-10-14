import { ArabesqueDivider, ManuscriptCorner, PalmBranchIcon } from './ManuscriptDecorations';
import { WORDS_FOR_RAYAN } from '../data/diwanData';
import { FadeInView } from './FadeInView';

export function WordsForRayan() {
  return (
    <section id="prelude" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <FadeInView className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-naskh text-[#B08D57] tracking-widest mb-2">
            <span>البَابُ الأَوَّل</span>
            <span>·</span>
            <span>فَاتِحَةُ الرَّجَاءِ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-amiri font-bold text-[#244C38] mb-3">
            {WORDS_FOR_RAYAN.heading}
          </h2>
          <p className="text-sm sm:text-base font-naskh text-[#59402E]">
            {WORDS_FOR_RAYAN.subheading}
          </p>
          <ArabesqueDivider className="my-4" />
        </FadeInView>

        {/* Manuscript Parchment Container */}
        <FadeInView delayMs={150} className="relative parchment-sheet rounded-2xl p-6 sm:p-12 lg:p-16 border border-[#B08D57]/30 shadow-md">
          {/* Subtle Corner Decorations */}
          <ManuscriptCorner className="absolute top-3 right-3" />
          <ManuscriptCorner className="absolute top-3 left-3 -rotate-90" />
          <ManuscriptCorner className="absolute bottom-3 right-3 rotate-90" />
          <ManuscriptCorner className="absolute bottom-3 left-3 rotate-180" />

          {/* Opening Salutation Banner */}
          <div className="bg-[#F3E8D2]/60 rounded-xl p-6 sm:p-8 mb-8 border border-[#B08D57]/20 text-center">
            <PalmBranchIcon className="w-8 h-8 mx-auto text-[#376B51] mb-3 opacity-80" />
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-amiri font-bold text-[#244C38] leading-relaxed">
              «{WORDS_FOR_RAYAN.openingAddress}»
            </blockquote>
          </div>

          {/* Eloquent Classical Arabic Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg lg:text-xl font-amiri leading-loose text-[#30271F] text-justify">
            {WORDS_FOR_RAYAN.paragraphs.map((p, idx) => (
              <p key={idx} className="indent-6 sm:indent-8 first:mt-2">
                {p}
              </p>
            ))}
          </div>

          {/* Ornamental Footnote */}
          <div className="mt-10 pt-6 border-t border-[#B08D57]/20 flex items-center justify-between text-xs font-naskh text-[#59402E]">
            <span>مِنْ دِيوَانِ القَلْب · تَبَارِيحُ الوِجْدَان</span>
            <span>إِلَى رَيَّان</span>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
