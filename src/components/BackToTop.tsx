import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
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
      className={`fixed bottom-6 right-6 z-40 group flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase px-3 py-2.5 rounded border border-terminal-cyan/30 bg-background/90 text-terminal-cyan backdrop-blur-sm transition-all duration-300 hover:border-terminal-cyan/60 hover:shadow-[0_0_15px_-3px] hover:shadow-terminal-cyan/20 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
      <span className="hidden sm:inline">cd ~</span>
    </button>
  );
};

export default BackToTop;
