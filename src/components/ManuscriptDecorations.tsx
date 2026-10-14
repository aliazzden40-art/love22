/**
 * زخارف ونقوش مستوحاة من المخطوطات والديوان العربي العتيق
 */

export function ArabesqueDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`} aria-hidden="true">
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-[#B08D57] to-transparent opacity-60" />
      <svg className="w-5 h-5 text-[#B08D57] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill="currentColor"
          fillOpacity="0.15"
          strokeWidth="1.2"
        />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-[#B08D57] to-transparent opacity-60" />
    </div>
  );
}

export function PalmBranchIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        d="M24 44C24 28 26 12 24 4"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M24 8C20 6 12 8 8 13C13 13 19 11 24 10"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M24 10C28 8 36 10 40 15C35 15 29 13 24 12"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M24 16C18 15 10 18 6 25C12 24 19 21 24 18"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M24 18C30 17 38 20 42 27C36 26 29 23 24 20"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M24 26C19 25 12 30 9 37C15 35 20 31 24 28"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M24 28C29 27 36 32 39 39C33 37 28 33 24 30"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IslamicFloralCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-9 h-9 sm:w-11 sm:h-11 text-[#B08D57] pointer-events-none arabesque-pulse transition-all ${className}`}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      {/* Outer corner frame lines */}
      <path
        d="M2 44V12C2 6.47715 6.47715 2 12 2H44"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />
      {/* Delicate inner hairline frame */}
      <path
        d="M6 38V14C6 9.58172 9.58172 6 14 6H38"
        strokeWidth="0.8"
        strokeDasharray="2 3"
        strokeOpacity="0.45"
      />
      {/* Main vegetal scroll tendrils (عروق التوريق النباتي الأندلسي) */}
      <path
        d="M6 6C15 6 20 11 22 19C23.5 25 28 28 36 27"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M6 6C6 15 11 20 19 22C25 23.5 28 28 27 36"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {/* Palm leaf / palmette petals (أوراق التوريق النباتي الرقيقة) */}
      <path
        d="M13 13C16 10 22 10 24 13C24 16 20 20 15 18C13.5 16.5 13 14.5 13 13Z"
        fill="currentColor"
        fillOpacity="0.22"
        strokeWidth="0.9"
      />
      <path
        d="M13 13C10 16 10 22 13 24C16 24 20 20 18 15C16.5 13.5 14.5 13 13 13Z"
        fill="currentColor"
        fillOpacity="0.22"
        strokeWidth="0.9"
      />
      <path
        d="M20 20C24 17 31 17 33 21C31 24 25 25 21 23C19.5 21.8 19.5 20.8 20 20Z"
        fill="currentColor"
        fillOpacity="0.15"
        strokeWidth="0.8"
      />
      <path
        d="M20 20C17 24 17 31 21 33C24 31 25 25 23 21C21.8 19.5 20.8 19.5 20 20Z"
        fill="currentColor"
        fillOpacity="0.15"
        strokeWidth="0.8"
      />
      {/* Tender vine spirals (حلزونات السعف والزهور) */}
      <path
        d="M22 12C26 9.5 30 11.5 31.5 15C32.5 17.5 31 19.5 29 19.5C27 19.5 26 17.5 28 15.5"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M12 22C9.5 26 11.5 30 15 31.5C17.5 32.5 19.5 31 19.5 29C19.5 27 17.5 26 15.5 28"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Central rosetta core & buds */}
      <circle cx="10" cy="10" r="2.2" fill="currentColor" fillOpacity="0.75" />
      <circle cx="19.5" cy="19.5" r="1.6" fill="currentColor" fillOpacity="0.85" />
      <circle cx="3.5" cy="3.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

// Retain ManuscriptCorner as an alias to IslamicFloralCorner for full backwards compatibility
export const ManuscriptCorner = IslamicFloralCorner;

export function ManuscriptSeal({ text = "علي" }: { text?: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full border border-[#B08D57]/40 bg-[#FFF9EF]/90 p-1 shadow-inner select-none">
      <div className="absolute inset-1 rounded-full border border-dashed border-[#B08D57]/30" />
      <span className="font-ruqaa text-lg text-[#59402E] font-bold tracking-tight">
        {text}
      </span>
    </div>
  );
}
