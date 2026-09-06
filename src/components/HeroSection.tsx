import React from 'react';
import { Terminal, Github, Instagram, Disc, Mail } from 'lucide-react';
import portraitSrc from '@/assets/portrait.jpg';
import TextScramble from '@/components/TextScramble';
import { playTabSwitchSound, playKeySound } from '@/lib/terminalAudio';

interface HeroSectionProps {
  activeTab?: string;
  onSelectTab?: (tab: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  activeTab = 'overview', 
  onSelectTab 
}) => {
  const tabs = [
    { id: 'overview', label: '[Posts / Overview]' },
    { id: 'terminal', label: '[Terminal]' },
    { id: 'projects', label: '[Projects]' },
    { id: 'skills', label: '[Skills]' },
    { id: 'experience', label: '[Experience]' },
    { id: 'achievements', label: '[Achievements]' },
  ];

  return (
    <section id="about" className="w-full pt-2 sm:pt-4 pb-2 scroll-mt-14">
      {/* Terminal Command Header with Live Typing Effect */}
      <div className="flex items-center justify-between gap-2 mb-2.5 text-zinc-500 font-mono text-xs select-none">
        <div className="flex items-center gap-1.5 sm:gap-2 truncate">
          <Terminal size={13} className="text-zinc-400 shrink-0" />
          <span className="text-zinc-400 text-[11px] sm:text-xs">rez@infra-audit:~$</span>
          <span className="text-zinc-200 text-[11px] sm:text-xs">cat</span>
          <span className="text-zinc-300 text-[11px] sm:text-xs">
            <TextScramble text="profile.id" trigger={activeTab} />
          </span>
          <span className="cursor-block text-zinc-400 text-[10px]" />
        </div>
        <div className="text-[9px] sm:text-[10px] text-zinc-500 tracking-widest uppercase shrink-0 flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 bg-zinc-400 rounded-full animate-pulse" />
          <span>SEC_LEVEL: 0</span>
        </div>
      </div>

      {/* Profile Section Label */}
      <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-zinc-300 uppercase mb-2 flex items-center gap-2 select-none">
        <span>PROFILE</span>
        <span className="h-px bg-zinc-800 flex-1" />
      </div>

      {/* Inverted Profile Card */}
      <div className="bg-[#e4e4e7] text-[#09090b] border border-[#d4d4d8] p-3.5 sm:p-6 shadow-md transition-all relative">
        {/* Corner ASCII brackets */}
        <span className="absolute top-1 left-1.5 font-mono text-[10px] text-[#09090b]/40 select-none">┌</span>
        <span className="absolute top-1 right-1.5 font-mono text-[10px] text-[#09090b]/40 select-none">┐</span>
        <span className="absolute bottom-1 left-1.5 font-mono text-[10px] text-[#09090b]/40 select-none">└</span>
        <span className="absolute bottom-1 right-1.5 font-mono text-[10px] text-[#09090b]/40 select-none">┘</span>
        {/* Top Section: Avatar + Name / Meta */}
        <div className="flex items-center sm:items-start gap-3.5 sm:gap-5">
          {/* 1-Bit Dithered Halftone Portrait */}
          <div className="w-18 h-18 sm:w-32 sm:h-32 md:w-36 md:h-36 shrink-0 border-2 border-[#09090b] bg-black relative overflow-hidden group">
            <img
              src={portraitSrc}
              alt="Rezky Andrian"
              className="w-full h-full object-cover dither-1bit grayscale contrast-200 brightness-95 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 inset-x-0 bg-[#09090b] text-[#e4e4e7] text-[7px] sm:text-[8px] font-mono text-center py-0.5 tracking-tighter uppercase">
              1-BIT
            </div>
          </div>

          {/* Identity Handle & Date */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-[#09090b]/15 pb-2 mb-2">
              <div>
                <h1 className="font-mono text-base sm:text-xl font-bold tracking-tight text-[#09090b]">
                  @rez
                </h1>
                <span className="text-xs text-[#09090b]/70 font-mono">
                  (Rezky Andrian)
                </span>
              </div>
              <div className="text-[10px] font-mono text-[#09090b]/60 tracking-wider">
                Joined October 26, 2025
              </div>
            </div>

            {/* Quick specs / tags (Desktop view) */}
            <div className="hidden sm:flex text-[10px] font-mono text-[#09090b]/70 flex-wrap gap-x-4 gap-y-1">
              <span><strong>NODE:</strong> vstn.cloud</span>
              <span><strong>LOCATION:</strong> Indonesia 🇮🇩</span>
            </div>
          </div>
        </div>

        {/* Bio description */}
        <p className="mt-3 font-mono text-xs sm:text-sm text-[#09090b]/90 leading-relaxed max-w-2xl">
          I build embedded systems (ESP32, Arduino), manage my own server stack on Proxmox and Docker, and do full-stack web dev with React and Vite. Most of my free time goes toward wireless security research and self-hosted infrastructure.
        </p>

        {/* Mobile quick specs */}
        <div className="sm:hidden text-[10px] font-mono text-[#09090b]/70 flex flex-wrap gap-x-3 gap-y-1 mt-2.5 pt-2 border-t border-[#09090b]/15">
          <span><strong>NODE:</strong> vstn.cloud</span>
          <span><strong>LOCATION:</strong> Indonesia 🇮🇩</span>
        </div>

        {/* Card Footer: Stats & TUI Buttons */}
        <div className="mt-4 pt-3 border-t-2 border-[#09090b] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 select-none">
          {/* Stats Bar */}
          <div className="font-mono text-[11px] sm:text-xs font-semibold text-[#09090b] flex items-center gap-3 sm:gap-4">
            <span>254 <span className="font-normal opacity-70">Commits</span></span>
            <span>39 <span className="font-normal opacity-70">Systems / Nodes</span></span>
          </div>

          {/* TUI Action Buttons - 2-col on mobile, flex on desktop */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-1.5 sm:gap-2 w-full sm:w-auto">
            <a
              href="https://github.com/rezneedsleep"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playKeySound()}
              className="btn-tui-inverted text-[11px] sm:text-xs justify-center py-2 sm:py-1 active:scale-[0.98]"
              title="GitHub Profile"
            >
              <Github size={12} className="shrink-0" />
              <span>[G] GitHub</span>
            </a>

            <a
              href="https://instagram.com/rez.css"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playKeySound()}
              className="btn-tui-inverted text-[11px] sm:text-xs justify-center py-2 sm:py-1 active:scale-[0.98]"
              title="Instagram"
            >
              <Instagram size={12} className="shrink-0" />
              <span>[I] Instagram</span>
            </a>

            <a
              href="https://discord.com/users/864702111542673428"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playKeySound()}
              className="btn-tui-inverted text-[11px] sm:text-xs justify-center py-2 sm:py-1 active:scale-[0.98]"
              title="Discord"
            >
              <Disc size={12} className="shrink-0" />
              <span>[D] Discord</span>
            </a>

            <a
              href="/contact"
              onClick={() => playKeySound()}
              className="btn-tui-inverted text-[11px] sm:text-xs justify-center py-2 sm:py-1 bg-[#09090b] text-[#e4e4e7] hover:bg-[#27272a] hover:text-white active:scale-[0.98]"
              title="Contact / Email"
            >
              <Mail size={12} className="shrink-0" />
              <span>[C] Contact</span>
            </a>
          </div>
        </div>
      </div>

      {/* Segmented In-Place Filter Tabs with Smooth Mobile Touch Scrolling */}
      <div className="mt-4 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none pb-1.5 select-none touch-pan-x">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                playTabSwitchSound();
                onSelectTab && onSelectTab(tab.id);
              }}
              className={`px-3 py-1.5 sm:py-1 text-xs font-mono transition-all cursor-pointer select-none flex items-center gap-1.5 shrink-0 active:scale-[0.97] ${
                isActive
                  ? 'font-bold bg-[#1a1a20] border border-[#52525b] text-white shadow-[0_0_8px_rgba(255,255,255,0.06)]'
                  : 'text-zinc-400 hover:text-zinc-200 bg-[#0d0d10] border border-[#222226] hover:border-[#38383e]'
              }`}
            >
              {isActive && <span className="inline-block w-1.5 h-1.5 bg-white shrink-0 animate-pulse" />}
              <span>
                {isActive ? <TextScramble text={tab.label} trigger={tab.id} /> : tab.label}
              </span>
              {isActive && <span className="cursor-block text-zinc-400 text-[9px]" />}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default HeroSection;