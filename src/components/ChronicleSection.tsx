import { ArabesqueDivider, ManuscriptCorner } from './ManuscriptDecorations';
import { CHRONICLE } from '../data/diwanData';
import { FadeInView } from './FadeInView';

export function ChronicleSection() {
  return (
    <section id="chronicle" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-[#F3E8D2]/25">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <FadeInView className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-naskh text-[#B08D57] tracking-widest mb-2">
            <span>البَابُ الخَامِس</span>
            <span>·</span>
            <span>تَقْيِيدُ التَّارِيخ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-amiri font-bold text-[#244C38] mb-3">
            {CHRONICLE.heading}
          </h2>
          <p className="text-sm sm:text-base font-naskh text-[#59402E]">
            {CHRONICLE.subheading}
          </p>
          <ArabesqueDivider className="my-4" />
        </FadeInView>

        {/* The Chronicle Card with Slow Gold Glow */}
        <FadeInView delayMs={150} className="relative bg-[#FFF9EF] rounded-2xl p-6 sm:p-12 lg:p-16 border border-[#B08D57]/45 shadow-xl manuscript-border manuscript-gold-glow mb-12">
          <ManuscriptCorner className="absolute top-3 right-3" />
          <ManuscriptCorner className="absolute top-3 left-3 -rotate-90" />
          <ManuscriptCorner className="absolute bottom-3 right-3 rotate-90" />
          <ManuscriptCorner className="absolute bottom-3 left-3 rotate-180" />

          {/* Central Calligraphic Date Display */}
          <div className="text-center pb-8 mb-8 border-b border-[#B08D57]/20">
            <span className="text-xs font-naskh text-[#B08D57] tracking-wider block mb-2">
              المَوْعِدُ الَّذِي لَا يُنْسَى
            </span>
            <div className="text-3xl sm:text-5xl font-amiri font-bold text-[#244C38] tracking-wide mb-2">
              ٨ يناير ٢٠٢٦
            </div>
            <p className="text-sm sm:text-base font-naskh text-[#59402E]">
              الثَّامِنُ مِنْ شَهْرِ يَنَايِرَ · عَامَ أَلْفَيْنِ وَسِتَّةٍ وَعِشْرِينَ لِلْمِيلَاد
            </p>
          </div>

          {/* Poetic Chronicle Prose */}
          <div className="space-y-6 text-base sm:text-lg lg:text-xl font-amiri leading-loose text-[#30271F] text-justify max-w-3xl mx-auto">
            {CHRONICLE.prose.map((paragraph, idx) => (
              <p key={idx} className="indent-6 sm:indent-8">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeInView>

        {/* Discreet Archival Colophon (خاتمة المخطوط والتقييد العتيق مع تواريخ الميلاد الهادئة) */}
        <FadeInView delayMs={200} className="bg-[#FFF9EF]/80 rounded-xl p-6 sm:p-8 border border-[#B08D57]/20 shadow-xs max-w-2xl mx-auto">
          <div className="text-center mb-5">
            <h3 className="text-base sm:text-lg font-amiri font-bold text-[#244C38] mb-1">
              {CHRONICLE.colophon.title}
            </h3>
            <p className="text-xs font-naskh text-[#59402E]">
              {CHRONICLE.colophon.note}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {CHRONICLE.colophon.dates.map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-[#F3E8D2]/35 border border-[#B08D57]/15">
                <span className="block text-xs font-naskh text-[#59402E] mb-1">
                  {item.label}
                </span>
                <span className="block text-sm sm:text-base font-amiri font-bold text-[#244C38]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
