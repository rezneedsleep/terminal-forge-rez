import React, { ReactNode } from 'react';
import { Globe, Lock, Plus, ArrowLeft, ArrowRight } from 'lucide-react';

interface CyberWindowFrameProps {
  children: ReactNode;
  domain?: string;
}

const CyberWindowFrame: React.FC<CyberWindowFrameProps> = ({ 
  children, 
  domain = "vstn.cloud" 
}) => {
  return (
    <div className="min-h-screen bg-[#050507] text-[#f4f4f5] flex flex-col font-mono selection:bg-zinc-200 selection:text-black">
      {/* Top Browser / Window Header */}
      <header className="sticky top-0 z-50 w-full bg-[#0d0d10] border-b border-[#222226] px-2.5 sm:px-4 py-2 pt-[max(0.5rem,env(safe-area-inset-top))] flex items-center justify-between select-none text-xs">
        {/* Left Window Control Buttons & Navigation */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a40] hover:bg-zinc-400 cursor-pointer transition-colors" title="Close" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a30] hover:bg-zinc-500 cursor-pointer transition-colors" title="Minimize" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#222227] hover:bg-zinc-600 cursor-pointer transition-colors" title="Expand" />
          </div>
          
          <div className="hidden sm:flex items-center gap-1 text-zinc-500 ml-2">
            <button 
              onClick={() => window.history.back()} 
              className="p-1 hover:text-zinc-200 transition-colors bg-transparent border-none cursor-pointer"
              title="Back"
            >
              <ArrowLeft size={13} />
            </button>
            <button 
              onClick={() => window.history.forward()} 
              className="p-1 hover:text-zinc-200 transition-colors bg-transparent border-none cursor-pointer"
              title="Forward"
            >
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Center: Address Bar Pill */}
        <div className="flex items-center justify-center flex-1 max-w-xs sm:max-w-md mx-2 sm:mx-6">
          <div className="w-full bg-[#16161a] border border-[#27272a] rounded-sm px-2.5 sm:px-3 py-1 flex items-center justify-center gap-1.5 sm:gap-2 text-zinc-300 shadow-inner">
            <Globe size={11} className="text-zinc-400 shrink-0" />
            <span className="text-[10px] sm:text-[11px] tracking-wider text-zinc-200 font-semibold truncate">
              {domain}
            </span>
            <Lock size={10} className="text-zinc-500 shrink-0" />
          </div>
        </div>

        {/* Right Utility Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-zinc-400 shrink-0">
          <span className="hidden md:inline-block text-[10px] uppercase tracking-widest text-zinc-400 bg-[#17171c] px-2 py-0.5 border border-[#26262b]">
            CyberOS v1.0.8
          </span>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="p-1 hover:text-zinc-200 transition-colors bg-transparent border-none cursor-pointer"
            title="Reload View"
          >
            <Plus size={14} />
          </button>
        </div>
      </header>

      {/* Main Workspace Frame */}
      <div className="flex-1 flex flex-col w-full relative">
        {children}
      </div>
    </div>
  );
};

export default CyberWindowFrame;
