import { ArabesqueDivider, ManuscriptCorner, PalmBranchIcon } from './ManuscriptDecorations';
import { OASIS_OF_EYES } from '../data/diwanData';
import { FadeInView } from './FadeInView';

import emeraldWaterPath from '../assets/images/oasis_emerald_palms_1791929468103.jpg';

export function OasisOfEyes() {
  return (
    <section id="eyes" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background with Emerald Oasis and measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={emeraldWaterPath}
          alt="ماء الواحة الرقراق وظلال السعف الأخضر"
          className="w-full h-full object-cover object-center filter brightness-[0.88] saturate-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Soft, measured contrast scrim guaranteeing 4.5:1 text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9EF]/95 via-[#FFF9EF]/88 to-[#FFF9EF]/95" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#244C38]/10 to-[#244C38]/20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <FadeInView className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-naskh text-[#B08D57] tracking-widest mb-2">
            <span>البَابُ الرَّابِع</span>
            <span>·</span>
            <span>سِحْرُ الخُضْرَة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-amiri font-bold text-[#244C38] mb-3">
            {OASIS_OF_EYES.heading}
          </h2>
          <p className="text-sm sm:text-base font-naskh text-[#59402E]">
            {OASIS_OF_EYES.subheading}
          </p>
          <ArabesqueDivider className="my-4" />
        </FadeInView>

        {/* Central Literary Passages */}
        <FadeInView delayMs={150} className="relative parchment-sheet rounded-2xl p-6 sm:p-12 lg:p-16 border border-[#B08D57]/30 shadow-xl mb-10">
          <ManuscriptCorner className="absolute top-3 right-3" />
          <ManuscriptCorner className="absolute top-3 left-3 -rotate-90" />
          <ManuscriptCorner className="absolute bottom-3 right-3 rotate-90" />
          <ManuscriptCorner className="absolute bottom-3 left-3 rotate-180" />

          <div className="max-w-3xl mx-auto text-center">
            <PalmBranchIcon className="w-10 h-10 mx-auto text-[#376B51] mb-4 opacity-75" />
            <p className="text-lg sm:text-2xl font-amiri leading-loose text-[#30271F] font-medium text-justify sm:text-center">
              {OASIS_OF_EYES.mainReflection}
            </p>
          </div>
        </FadeInView>

        {/* 3 Contemplative Facets (صفاء النبع، فيء السعف، عمق الغدير) */}
        <FadeInView delayMs={250} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OASIS_OF_EYES.aspects.map((aspect) => (
            <div
              key={aspect.id}
              className="bg-[#FFF9EF]/90 backdrop-blur-xs rounded-xl p-6 border border-[#B08D57]/25 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-amiri font-bold text-[#244C38] mb-2 pb-2 border-b border-[#B08D57]/20">
                  {aspect.title}
                </h3>
                <p className="text-sm sm:text-base font-amiri text-[#30271F] leading-relaxed mb-4">
                  {aspect.text}
                </p>
              </div>
              <blockquote className="text-xs sm:text-sm font-amiri italic text-[#59402E] bg-[#F3E8D2]/40 p-3 rounded-lg border-r-2 border-[#B08D57]">
                {aspect.quote}
              </blockquote>
            </div>
          ))}
        </FadeInView>
      </div>
    </section>
  );
}
