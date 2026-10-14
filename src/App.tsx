/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WordsForRayan } from './components/WordsForRayan';
import { AncientLetter } from './components/AncientLetter';
import { ClassicalGhazal } from './components/ClassicalGhazal';
import { OasisOfEyes } from './components/OasisOfEyes';
import { ChronicleSection } from './components/ChronicleSection';
import { ClosingPage } from './components/ClosingPage';
import { ManuscriptReaderModal } from './components/ManuscriptReaderModal';
import { FloatingLiteraryToolbar } from './components/FloatingLiteraryToolbar';
import { ManuscriptToast } from './components/ManuscriptToast';

export default function App() {
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#30271F] font-amiri selection:bg-[#B08D57]/20 selection:text-[#244C38] relative flex flex-col">
      {/* Scroll Reading Progress Bar (Subtle gold thread indicator) */}
      <div
        className="fixed top-0 right-0 left-0 h-[2.5px] bg-[#B08D57] z-50 transition-all duration-150 origin-right"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="مؤشر عمق القراءة في الديوان"
      />

      {/* Top Bar Navigation */}
      <Navbar onOpenManuscriptReader={() => setIsReaderOpen(true)} />

      {/* Main Literary Journey */}
      <main className="flex-1 w-full">
        {/* The Opening of the Divan */}
        <HeroSection />

        {/* Section One: Words Written for Rayan */}
        <WordsForRayan />

        {/* Section Two: The Ancient Love Letter */}
        <AncientLetter onShowToast={showToast} />

        {/* Section Three: Classical Arabic Ghazal */}
        <ClassicalGhazal onShowToast={showToast} />

        {/* Section Four: The Oasis of Her Eyes */}
        <OasisOfEyes />

        {/* Section Five: The Chronicle of a Beginning */}
        <ChronicleSection />
      </main>

      {/* Section Six: The Last Page & Footer */}
      <ClosingPage />

      {/* Floating Literary Actions Toolbar */}
      <FloatingLiteraryToolbar
        onOpenReader={() => setIsReaderOpen(true)}
        onShowToast={showToast}
      />

      {/* Classical Arabic Manuscript Toast */}
      <ManuscriptToast message={toastMessage} />

      {/* Fullscreen Classical Manuscript Reader Modal */}
      <ManuscriptReaderModal
        isOpen={isReaderOpen}
        onClose={() => setIsReaderOpen(false)}
      />
    </div>
  );
}
