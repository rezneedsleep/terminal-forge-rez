import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

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
      className={`fixed bottom-6 right-4 sm:right-6 z-40 group flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-full border border-zinc-800 bg-[#121216]/90 text-zinc-300 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-zinc-600 hover:text-white hover:bg-zinc-800 cursor-pointer ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp size={13} className="transition-transform group-hover:-translate-y-0.5 text-zinc-400 group-hover:text-white" />
      <span>Top</span>
    </button>
  );
};

export default BackToTop;
