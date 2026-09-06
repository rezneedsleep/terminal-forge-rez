import React, { useState } from 'react';
import { Terminal, Bookmark, Cpu, Check } from 'lucide-react';
import TextScramble from '@/components/TextScramble';

interface CyberPostCardProps {
  onSwitchTab?: (tab: string) => void;
}

const CyberPostCard: React.FC<CyberPostCardProps> = ({ onSwitchTab }) => {
  const [copied, setCopied] = useState(false);

  const copyLog = () => {
    navigator.clipboard.writeText("Rezky Andrian (rez) — CyberOS Noir v1.0.8 // vstn.cloud");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="border border-[#27272a] bg-[#0d0d10] p-4 sm:p-6 transition-all hover:border-[#3f3f46] relative">
      {/* Corner ASCII brackets */}
      <span className="absolute top-1 left-1.5 font-mono text-[10px] text-zinc-600 select-none">┌</span>
      <span className="absolute top-1 right-1.5 font-mono text-[10px] text-zinc-600 select-none">┐</span>
      <span className="absolute bottom-1 left-1.5 font-mono text-[10px] text-zinc-600 select-none">└</span>
      <span className="absolute bottom-1 right-1.5 font-mono text-[10px] text-zinc-600 select-none">┘</span>

      {/* Post Meta Header matching cyberspace.online */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1f1f24] pb-2.5 mb-3 select-none text-[11px] font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="text-zinc-200 font-bold">@rez</span>
          <span className="text-xs text-zinc-500">(Rezky Andrian)</span>
        </div>
        <div className="text-[10px] text-zinc-500">
          1h ago • 44 words • 1 save • 6 replies
        </div>
      </div>

      {/* Version Title */}
      <h3 className="font-mono text-sm sm:text-base font-bold text-zinc-100 mb-3 tracking-wide flex items-center gap-2">
        <span className="text-zinc-100">
          <TextScramble text="V1.0.8" />
        </span>
        <span className="text-[10px] font-normal text-zinc-400 px-1.5 py-0.2 border border-[#27272a] bg-[#121216]">
          CYBEROS NOIR
        </span>
      </h3>

      {/* Changelog Bullet Points */}
      <ul className="space-y-2 text-xs font-mono text-zinc-300 leading-relaxed mb-4">
        <li className="flex items-start gap-2">
          <span className="text-zinc-500 select-none">•</span>
          <span>Tab-based in-place view switcher enabled — zero scrolling required.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-zinc-500 select-none">•</span>
          <span>Monochrome high-contrast theme deployed across all components and terminal outputs.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-zinc-500 select-none">•</span>
          <span>Hardware & RF research modules active: ESP32 Marauder, Blue Jammer, and Self-Hosted Cloud.</span>
        </li>
      </ul>

      {/* Quote / Signoff */}
      <p className="font-mono text-xs text-zinc-400 italic mb-5">
        Infrastructure as code. Wireless research as craft.
      </p>

      {/* Tags & Action Buttons matching cyberspace.online */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#1f1f24] select-none">
        {/* Tag Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-mono bg-[#141418] text-zinc-400 border border-[#24242a] px-1.5 py-0.5">
            [vstn.cloud]
          </span>
          <span className="text-[10px] font-mono bg-[#141418] text-zinc-400 border border-[#24242a] px-1.5 py-0.5">
            [cyberos]
          </span>
          <span className="text-[10px] font-mono bg-[#141418] text-zinc-400 border border-[#24242a] px-1.5 py-0.5">
            [embedded]
          </span>
          <span className="text-[10px] font-mono bg-[#141418] text-zinc-400 border border-[#24242a] px-1.5 py-0.5">
            [updates]
          </span>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-1.5 w-full sm:w-auto sm:flex sm:items-center sm:gap-2">
          {onSwitchTab && (
            <button
              onClick={() => onSwitchTab('terminal')}
              className="btn-tui text-[11px] sm:text-xs justify-center py-1.5 sm:py-1 px-1.5 sm:px-2.5 cursor-pointer active:scale-[0.97]"
              title="Open Terminal Tab"
            >
              <Terminal size={11} className="shrink-0" />
              <span className="hidden sm:inline">[↵] Open Shell</span>
              <span className="sm:hidden">[↵] Shell</span>
            </button>
          )}

          {onSwitchTab && (
            <button
              onClick={() => onSwitchTab('projects')}
              className="btn-tui text-[11px] sm:text-xs justify-center py-1.5 sm:py-1 px-1.5 sm:px-2.5 cursor-pointer active:scale-[0.97]"
              title="Open Projects Tab"
            >
              <Cpu size={11} className="shrink-0" />
              <span>[P] Projects</span>
            </button>
          )}

          <button
            onClick={copyLog}
            className="btn-tui text-[11px] sm:text-xs justify-center py-1.5 sm:py-1 px-1.5 sm:px-2.5 cursor-pointer active:scale-[0.97]"
            title="Save Log"
          >
            {copied ? <Check size={11} className="text-zinc-200 shrink-0" /> : <Bookmark size={11} className="shrink-0" />}
            <span>{copied ? 'Saved!' : '[S] Save'}</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CyberPostCard;
