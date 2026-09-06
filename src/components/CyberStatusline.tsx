import React, { useEffect, useState } from 'react';
import { playTabSwitchSound, playKeySound } from '@/lib/terminalAudio';

interface CyberStatuslineProps {
  onSelectTab?: (tab: string) => void;
}

const CyberStatusline: React.FC<CyberStatuslineProps> = ({ onSelectTab }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'Escape') {
        playKeySound();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const copyContact = () => {
    playKeySound();
    navigator.clipboard.writeText('zyxienn21@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTabClick = (tab: string) => {
    playTabSwitchSound();
    if (onSelectTab) onSelectTab(tab);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0d]/95 backdrop-blur-md border-t border-[#222226] px-2.5 sm:px-4 py-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))] flex items-center justify-between font-mono text-[10px] text-zinc-400 select-none">
      {/* Left Hotkey Guides */}
      <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto whitespace-nowrap scrollbar-none py-0.5 touch-pan-x">
        <button 
          onClick={() => handleTabClick('terminal')}
          className="hover:text-zinc-100 transition-colors bg-transparent border-none cursor-pointer p-0 font-mono text-[10px] text-zinc-400 active:scale-95"
        >
          <span className="text-zinc-200 font-semibold">[⌘K]</span> Shell
        </button>
        <span className="text-zinc-700 hidden sm:inline">•</span>
        <button 
          onClick={() => handleTabClick('projects')}
          className="hover:text-zinc-100 transition-colors bg-transparent border-none cursor-pointer p-0 font-mono text-[10px] text-zinc-400 active:scale-95"
        >
          <span className="text-zinc-200 font-semibold">[P]</span> Projects
        </button>
        <span className="text-zinc-700 hidden sm:inline">•</span>
        <button 
          onClick={() => handleTabClick('overview')}
          className="hover:text-zinc-100 transition-colors bg-transparent border-none cursor-pointer p-0 font-mono text-[10px] text-zinc-400 active:scale-95"
        >
          <span className="text-zinc-200 font-semibold">[O]</span> Overview
        </button>
        <span className="text-zinc-700 hidden sm:inline">•</span>
        <button 
          onClick={() => {
            playKeySound();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="hover:text-zinc-100 transition-colors bg-transparent border-none cursor-pointer p-0 font-mono text-[10px] text-zinc-400 active:scale-95"
        >
          <span className="text-zinc-200 font-semibold">[ESC]</span> Top
        </button>
      </div>

      {/* Right User & System Status */}
      <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 ml-2">
        <button
          onClick={copyContact}
          className="hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0 font-mono text-[10px] text-zinc-400"
          title="Click to copy email"
        >
          {copied ? (
            <span className="text-white font-semibold">COPIED EMAIL!</span>
          ) : (
            <span>@rezkyandrian</span>
          )}
        </button>
        <span className="text-zinc-700 hidden md:inline">•</span>
        <span className="hidden md:inline text-zinc-500">vstn.cloud</span>
        <span className="text-zinc-700 hidden md:inline">•</span>
        <span className="text-zinc-300 font-semibold flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 bg-zinc-300 rounded-full animate-pulse" />
          <span>SYS_OK</span>
          <span className="cursor-block text-zinc-500 text-[8px]" />
        </span>
      </div>
    </div>
  );
};

export default CyberStatusline;
