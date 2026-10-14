import { useState } from 'react';
import { ArabesqueDivider, ManuscriptCorner } from './ManuscriptDecorations';
import { GHAZAL_POEM, Verse } from '../data/diwanData';
import { Copy, Check, Feather, Sliders } from 'lucide-react';
import { FadeInView } from './FadeInView';

interface ClassicalGhazalProps {
  onShowToast?: (msg: string) => void;
}

export function ClassicalGhazal({ onShowToast }: ClassicalGhazalProps) {
  const [showTashkeel, setShowTashkeel] = useState(true);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [activeVerseId, setActiveVerseId] = useState<number | null>(null);

  const handleCopyVerse = (verse: Verse) => {
    const textToCopy = showTashkeel
      ? `${verse.firstHemistich} ... ${verse.secondHemistich}`
      : `${verse.plainFirst} ... ${verse.plainSecond}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedId(verse.id);
      onShowToast?.("تَمَّ نَسْخُ البَيْتِ بِمِدَادِهِ الأَصِيل");
      setTimeout(() => setCopiedId(null), 2500);
    });
  };

  const handleCopyAllPoem = () => {
    const fullPoem = GHAZAL_POEM.map(
      (v) =>
        `${showTashkeel ? v.firstHemistich : v.plainFirst}  ...  ${showTashkeel ? v.secondHemistich : v.plainSecond}`
    ).join('\n');

    navigator.clipboard.writeText(fullPoem).then(() => {
      setCopiedId(999);
      onShowToast?.("تَمَّ نَسْخُ قَصِيدَةِ الغَزَلِ كَامِلَةً");
      setTimeout(() => setCopiedId(null), 2500);
    });
  };

  return (
    <section id="ghazal" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <FadeInView className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-naskh text-[#B08D57] tracking-widest mb-2">
            <span>البَابُ الثَّالِث</span>
            <span>·</span>
            <span>الدُّرُّ المَنْظُوم</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-amiri font-bold text-[#244C38] mb-3">
            قَصِيدَةُ الغَزَل: فِي ظِلَالِ النَّخِيل
          </h2>
          <p className="text-sm sm:text-base font-naskh text-[#59402E]">
            اثنا عشر بيتًا على بحر الوافر بقافية النون المكسورة الرقيقة، مهداة إلى رَيَّان
          </p>
          <ArabesqueDivider className="my-4" />
        </FadeInView>

        {/* Control Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 px-2 text-xs font-naskh">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowTashkeel(!showTashkeel)}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#B08D57]/30 bg-[#FFF9EF] text-[#30271F] hover:bg-[#F3E8D2] transition-colors cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5 text-[#B08D57]" />
              <span>{showTashkeel ? "إِخْفَاءُ التَّشْكِيل" : "إِظْهَارُ التَّشْكِيل"}</span>
            </button>
          </div>

          <button
            onClick={handleCopyAllPoem}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#B08D57]/30 bg-[#FFF9EF] text-[#30271F] hover:bg-[#F3E8D2] transition-colors cursor-pointer"
          >
            {copiedId === 999 ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#376B51]" />
                <span className="text-[#376B51]">تَمَّ نَسْخُ القَصِيدَةِ كَامِلَة</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#59402E]" />
                <span>نَسْخُ كَامِلِ الأَبْيَات</span>
              </>
            )}
          </button>
        </div>

        {/* Divan Sheet with Slow Gold Glow */}
        <FadeInView delayMs={150} className="relative bg-[#FFF9EF] rounded-2xl p-6 sm:p-12 lg:p-16 border border-[#B08D57]/45 shadow-xl manuscript-border manuscript-gold-glow">
          {/* 4 Manuscript Gold Corners */}
          <ManuscriptCorner className="absolute top-3 right-3" />
          <ManuscriptCorner className="absolute top-3 left-3 -rotate-90" />
          <ManuscriptCorner className="absolute bottom-3 right-3 rotate-90" />
          <ManuscriptCorner className="absolute bottom-3 left-3 rotate-180" />

          {/* Heading Inscription */}
          <div className="text-center pb-8 border-b border-[#B08D57]/20 mb-8">
            <span className="text-xs font-naskh text-[#B08D57] tracking-widest block mb-1">
              مِنْ بَحْرِ الوَافِرِ وَعَذْبِ النَّشِيد
            </span>
            <p className="text-base sm:text-lg font-amiri font-bold text-[#244C38]">
              قَالَ عَلِيٌّ فِي وَصْفِ رَيَّان وَسِحْرِ عَيْنَيْهَا:
            </p>
          </div>

          {/* Verses Container */}
          <div className="divide-y divide-[#B08D57]/15 space-y-6">
            {GHAZAL_POEM.map((verse, index) => {
              const isSelected = activeVerseId === verse.id;
              const isCopied = copiedId === verse.id;

              return (
                <div
                  key={verse.id}
                  onClick={() => setActiveVerseId(isSelected ? null : verse.id)}
                  className={`pt-6 first:pt-0 transition-all rounded-lg p-3 group cursor-pointer ${
                    isSelected ? 'bg-[#F3E8D2]/40 ring-1 ring-[#B08D57]/30' : 'hover:bg-[#F3E8D2]/20'
                  }`}
                >
                  {/* Verse Number & Theme kicker */}
                  <div className="flex items-center justify-between text-xs font-naskh text-[#B08D57] mb-3">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full border border-[#B08D57]/40 inline-flex items-center justify-center text-[10px]">
                        {index + 1}
                      </span>
                      <span className="text-[#59402E] font-medium">{verse.theme}</span>
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyVerse(verse);
                      }}
                      type="button"
                      className="opacity-0 group-hover:opacity-100 p-1 text-[#59402E] hover:text-[#244C38] transition-opacity cursor-pointer"
                      title="نسخ هذا البيت"
                    >
                      {isCopied ? (
                        <span className="text-[11px] text-[#376B51] font-naskh font-medium">تَمَّ النَّسْخ</span>
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Classical Two-Hemistich Arrangement (الصدر والعجز) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 items-center text-center sm:text-justify">
                    {/* First Hemistich (الصدر) */}
                    <div className="text-lg sm:text-xl lg:text-2xl font-amiri font-bold text-[#244C38] leading-relaxed tracking-wide text-center md:text-right">
                      {showTashkeel ? verse.firstHemistich : verse.plainFirst}
                    </div>

                    {/* Middle Divider on Mobile / Second Hemistich (العجز) */}
                    <div className="text-lg sm:text-xl lg:text-2xl font-amiri font-bold text-[#30271F] leading-relaxed tracking-wide text-center md:text-left">
                      {showTashkeel ? verse.secondHemistich : verse.plainSecond}
                    </div>
                  </div>

                  {/* Illuminated Selected Verse Detail */}
                  {isSelected && (
                    <div className="mt-4 pt-3 border-t border-[#B08D57]/25 flex items-center justify-between text-xs font-naskh text-[#59402E] bg-[#F3E8D2]/30 p-2.5 rounded-md">
                      <span className="text-[#244C38] font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
                        <span>بَيْتٌ مُخْتَارٌ لِرَيَّان · {verse.theme}</span>
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyVerse(verse);
                        }}
                        type="button"
                        className="inline-flex items-center gap-1 text-[#244C38] hover:text-[#376B51] underline font-medium cursor-pointer"
                      >
                        <Copy className="w-3 h-3" />
                        <span>نَسْخُ هَذَا البَيْتِ فَقَط</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Ghazal Colophon / Footer */}
          <div className="mt-12 pt-8 border-t border-[#B08D57]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-naskh text-[#59402E]">
            <div className="flex items-center gap-2">
              <Feather className="w-4 h-4 text-[#B08D57]" />
              <span>تَمَّتِ القَصِيدَةُ بِحَمْدِ اللهِ وَعَوْنِه</span>
            </div>
            <span className="text-[#B08D57]">نُظِمَتْ لِرَيَّان · دِيوَانُ القَلْب</span>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
