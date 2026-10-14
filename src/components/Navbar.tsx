import { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { AudioAmbiance } from './AudioAmbiance';

interface NavbarProps {
  onOpenManuscriptReader?: () => void;
}

export function Navbar({ onOpenManuscriptReader }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "فاتحة الديوان", href: "#prelude" },
    { label: "رسالة الأزل", href: "#letter" },
    { label: "غزل الواحة", href: "#ghazal" },
    { label: "عينان كوثر", href: "#eyes" },
    { label: "تاريخ اللقاء", href: "#chronicle" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFF9EF]/95 backdrop-blur-md border-b border-[#B08D57]/20 shadow-xs transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <a
          href="#hero"
          className="text-xl sm:text-2xl font-bold font-kufi tracking-tight text-[#244C38] hover:text-[#376B51] transition-colors whitespace-nowrap shrink-0"
        >
          رَيَّان | دِيوَانُ القَلْب
        </a>

        {/* Zone 2: 4-5 Single-line Text Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium font-naskh text-[#59402E]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#244C38] hover:underline underline-offset-8 decoration-[#B08D57]/60 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Ambient Audio */}
        <div className="flex items-center gap-3 shrink-0">
          <AudioAmbiance />
          
          <button
            onClick={onOpenManuscriptReader}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium font-naskh text-white bg-[#244C38] hover:bg-[#376B51] rounded-md transition-colors shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>قراءة المخطوط</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#59402E] hover:text-[#244C38] rounded-md focus:outline-hidden"
            aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF9EF] border-b border-[#B08D57]/30 px-6 py-4 shadow-md transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-2 text-base font-naskh text-[#30271F] hover:text-[#244C38] border-b border-[#B08D57]/10"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenManuscriptReader?.();
              }}
              className="mt-2 w-full py-2.5 text-center text-sm font-medium font-naskh text-white bg-[#244C38] rounded-md shadow-xs"
            >
              قراءة المخطوط كاملاً
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
