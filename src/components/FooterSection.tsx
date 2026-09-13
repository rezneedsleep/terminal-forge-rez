import React from 'react';
import { ArrowUp } from 'lucide-react';

const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full pt-8 pb-[max(2rem,calc(env(safe-area-inset-bottom,0px)+1.5rem))] border-t border-zinc-850 select-none">
      <div className="flex items-center justify-between">
        <span className="text-xs sm:text-sm text-zinc-400 font-medium">
          © {new Date().getFullYear()} Rezky Andrian
        </span>

        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 active:scale-95 touch-manipulation transition-all text-xs font-medium cursor-pointer"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ArrowUp size={13} />
          <span>Top</span>
        </button>
      </div>
    </footer>
  );
};

export default FooterSection;