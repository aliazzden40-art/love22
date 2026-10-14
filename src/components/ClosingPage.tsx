import { ArabesqueDivider, ManuscriptCorner, PalmBranchIcon, ManuscriptSeal } from './ManuscriptDecorations';
import { CLOSING_PAGE } from '../data/diwanData';
import { FadeInView } from './FadeInView';

export function ClosingPage() {
  return (
    <footer id="closing" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#FFF9EF] via-[#F3E8D2]/40 to-[#F3E8D2]/80">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <FadeInView className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-naskh text-[#B08D57] tracking-widest mb-2">
            <span>البَابُ السَّادِس</span>
            <span>·</span>
            <span>خَاتِمَةُ الدِّيوَان</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-amiri font-bold text-[#244C38] mb-3">
            {CLOSING_PAGE.heading}
          </h2>
          <p className="text-sm sm:text-base font-naskh text-[#59402E]">
            {CLOSING_PAGE.subheading}
          </p>
          <ArabesqueDivider className="my-4" />
        </FadeInView>

        {/* The Final Manuscript Sheet with Slow Gold Glow */}
        <FadeInView delayMs={150} className="relative bg-[#FFF9EF] rounded-2xl p-8 sm:p-14 border border-[#B08D57]/45 shadow-xl manuscript-border manuscript-gold-glow text-center">
          <ManuscriptCorner className="absolute top-3 right-3" />
          <ManuscriptCorner className="absolute top-3 left-3 -rotate-90" />
          <ManuscriptCorner className="absolute bottom-3 right-3 rotate-90" />
          <ManuscriptCorner className="absolute bottom-3 left-3 rotate-180" />

          {/* Palm Silhouette Icon */}
          <PalmBranchIcon className="w-12 h-12 mx-auto text-[#244C38] mb-6 opacity-75" />

          {/* Final Prose */}
          <p className="text-lg sm:text-2xl font-amiri leading-loose text-[#30271F] font-medium mb-10 text-justify sm:text-center max-w-2xl mx-auto">
            {CLOSING_PAGE.finalProse}
          </p>

          {/* Closing Couplet */}
          <div className="bg-[#F3E8D2]/50 rounded-xl p-6 sm:p-8 mb-10 border border-[#B08D57]/20 max-w-xl mx-auto">
            <span className="text-xs font-naskh text-[#B08D57] block mb-3">
              بَيْتُ الخِتَام
            </span>
            <div className="text-xl sm:text-2xl font-amiri font-bold text-[#244C38] leading-relaxed mb-2">
              {CLOSING_PAGE.couplet.first}
            </div>
            <div className="text-xl sm:text-2xl font-amiri font-bold text-[#59402E] leading-relaxed">
              {CLOSING_PAGE.couplet.second}
            </div>
          </div>

          {/* The Closing Signature */}
          <div className="pt-6 border-t border-[#B08D57]/20 flex flex-col items-center justify-center gap-4">
            <h3 className="text-2xl sm:text-3xl font-amiri font-bold text-[#244C38]">
              {CLOSING_PAGE.signature}
            </h3>

            <div className="my-2">
              <ManuscriptSeal text="عَلِيّ" />
            </div>

            <p className="text-xs font-naskh text-[#59402E]/80 tracking-wide mt-2">
              {CLOSING_PAGE.manuscriptSeal}
            </p>
          </div>
        </FadeInView>

        {/* Quiet Colophon Footnote */}
        <div className="text-center mt-12 text-xs font-naskh text-[#59402E]/60">
          <p>رَيَّان · ديوانُ القلب · ثَمَرَةُ مَحَبَّةٍ خَالِدَة</p>
        </div>
      </div>
    </footer>
  );
}
