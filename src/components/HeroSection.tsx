import { ChevronDown, Feather } from 'lucide-react';
import { ArabesqueDivider, ManuscriptCorner } from './ManuscriptDecorations';
import { DIWAN_INFO } from '../data/diwanData';

import heroImagePath from '../assets/images/hero_oasis_dawn_1791929466085.jpg';

export function HeroSection() {
  const handleOpenDiwan = () => {
    const target = document.getElementById('prelude');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-4 py-16 sm:py-24"
    >
      {/* Background Image with Warm Scrim & Parchment Gradation */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImagePath}
          alt="واحة عربية عريقة عند مطلع الفجر الذهبي"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.03]"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered warm parchment scrim to guarantee AA contrast and authentic manuscript look */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9EF]/90 via-[#FFF9EF]/80 to-[#FFF9EF]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#F3E8D2]/30 to-[#244C38]/15" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto w-full text-center">
        {/* Soft slow ambient gold halo behind the cartouche */}
        <div
          className="absolute -inset-2 sm:-inset-3 rounded-2xl bg-gradient-to-r from-[#B08D57]/15 via-[#E3CDA4]/25 to-[#B08D57]/15 blur-lg opacity-75 pointer-events-none transition-opacity"
          aria-hidden="true"
        />

        {/* Manuscript Royal Cartouche / Frame with slow antique gold glow */}
        <div className="relative bg-[#FFF9EF]/90 backdrop-blur-md rounded-xl p-8 sm:p-14 shadow-xl border border-[#B08D57]/45 manuscript-border manuscript-gold-glow">
          {/* 4 Manuscript Gold Corners */}
          <ManuscriptCorner className="absolute top-2 right-2 rotate-0 text-[#B08D57]" />
          <ManuscriptCorner className="absolute top-2 left-2 -rotate-90 text-[#B08D57]" />
          <ManuscriptCorner className="absolute bottom-2 right-2 rotate-90 text-[#B08D57]" />
          <ManuscriptCorner className="absolute bottom-2 left-2 rotate-180 text-[#B08D57]" />

          {/* Discreet Top Archival Kicker */}
          <div className="flex items-center justify-center gap-2 text-xs font-naskh text-[#59402E]/80 tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57]/60" />
            <span>مَخْطُوطَةُ العِشْقِ العَرَبِيِّ الخَالِد</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57]/60" />
          </div>

          {/* Grand Calligraphic Recipient Name: رَيَّان */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-kufi text-[#244C38] tracking-wide mb-3 leading-tight select-none">
            رَيَّان
          </h1>

          {/* Diwan Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-amiri font-bold text-[#B08D57] mb-6">
            دِيوَانُ القَلْب
          </h2>

          <ArabesqueDivider className="my-5" />

          {/* Main Literary Subtitle / Dedication Quote */}
          <p className="text-lg sm:text-2xl font-amiri leading-relaxed text-[#30271F] max-w-2xl mx-auto mb-6 text-balance font-medium">
            «إِلَى الَّتِي جَعَلَتْ لِلصَّحْرَاءِ وَاحَةً، وَلِلصَّمْتِ قَصِيدَةً، وَلِلْقَلْبِ حِكَايَةً لَا تَنْتَهِي.»
          </p>

          {/* Discreet introduction of Ali and the starting date */}
          <div className="max-w-xl mx-auto pt-2 pb-1 border-t border-[#B08D57]/20">
            <p className="text-sm sm:text-base font-naskh text-[#59402E] leading-loose">
              {DIWAN_INFO.dedicationNote}
            </p>
          </div>

          {/* The Elegant Primary Action: افتحي الديوان */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleOpenDiwan}
              type="button"
              className="group inline-flex items-center gap-3 px-8 py-3.5 text-base sm:text-lg font-amiri font-bold text-white bg-[#244C38] hover:bg-[#376B51] rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              <Feather className="w-5 h-5 text-[#B08D57] group-hover:rotate-12 transition-transform duration-300" />
              <span>افْتَحِي الدِّيوَان</span>
              <ChevronDown className="w-4 h-4 text-white/80 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
