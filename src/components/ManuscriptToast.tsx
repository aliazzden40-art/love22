import { Check, Sparkles } from 'lucide-react';

interface ManuscriptToastProps {
  message: string | null;
}

export function ManuscriptToast({ message }: ManuscriptToastProps) {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-xl bg-[#244C38] text-white border border-[#B08D57]/60 shadow-2xl backdrop-blur-md animate-fade-in font-naskh text-sm"
    >
      <div className="w-5 h-5 rounded-full bg-[#B08D57]/30 flex items-center justify-center shrink-0">
        <Sparkles className="w-3.5 h-3.5 text-[#E3CDA4]" />
      </div>
      <span className="font-medium text-[#FFF9EF]">{message}</span>
      <Check className="w-4 h-4 text-[#E3CDA4] shrink-0" />
    </div>
  );
}
