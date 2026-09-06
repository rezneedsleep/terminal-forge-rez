import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-9 right-4 sm:right-6 z-40 group flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase px-3 py-2 border border-[#2e2e36] bg-[#121216]/95 text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-zinc-500 hover:text-white hover:bg-[#18181e] cursor-pointer ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUp size={13} className="transition-transform group-hover:-translate-y-0.5 text-zinc-400 group-hover:text-white" />
      <span>[ESC] cd ~</span>
    </button>
  );
};

export default BackToTop;
