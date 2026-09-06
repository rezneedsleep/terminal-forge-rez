import React from 'react';
import { Building2, ExternalLink } from 'lucide-react';
import TextScramble from '@/components/TextScramble';
import { playKeySound } from '@/lib/terminalAudio';

const ExperienceSection: React.FC = () => (
  <section id="experience" className="w-full py-2 scroll-mt-14">
    {/* Section Header */}
    <div className="flex items-center justify-between gap-2 mb-3 text-zinc-500 font-mono text-xs select-none">
      <div className="flex items-center gap-2">
        <span className="text-zinc-300">$</span>
        <span className="text-zinc-200">cat</span>
        <span className="text-zinc-400">
          <TextScramble text="experience.log" />
        </span>
        <span className="cursor-block text-zinc-500 text-[9px]" />
      </div>
      <span className="text-[10px] text-zinc-600 tracking-wider">[HOTKEY: E]</span>
    </div>

    <div className="text-[11px] font-bold tracking-[0.2em] text-zinc-300 uppercase mb-4 flex items-center gap-2 select-none">
      <span>EXPERIENCE // PRODUCTION SYSTEMS</span>
      <span className="h-px bg-zinc-800 flex-1" />
    </div>

    {/* Experience Card with ASCII Corners */}
    <a
      href="https://bytenodes.icu"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => playKeySound()}
      className="border border-[#27272a] bg-[#0c0c0f] p-5 sm:p-6 hover:border-[#3f3f46] transition-all duration-200 group block select-none relative"
    >
      {/* Corner ASCII brackets */}
      <span className="absolute top-1 left-1.5 font-mono text-[10px] text-zinc-600 select-none">┌</span>
      <span className="absolute top-1 right-1.5 font-mono text-[10px] text-zinc-600 select-none">┐</span>
      <span className="absolute bottom-1 left-1.5 font-mono text-[10px] text-zinc-600 select-none">└</span>
      <span className="absolute bottom-1 right-1.5 font-mono text-[10px] text-zinc-600 select-none">┘</span>

      <div className="flex items-start gap-4">
        <div className="p-2 border border-[#222226] bg-[#141418] shrink-0 text-zinc-300 group-hover:text-white transition-colors">
          <Building2 size={20} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1 border-b border-[#1c1c21] pb-2">
            <div className="flex items-center gap-2">
              <h3 className="font-mono text-sm sm:text-base font-bold text-zinc-100 group-hover:text-white transition-colors">
                Infrastructure & Systems Engineering
              </h3>
              <span className="text-[9px] bg-[#18181c] text-zinc-400 border border-zinc-700 px-1 py-0.2">
                ACTIVE
              </span>
            </div>
            <span className="font-mono text-xs text-zinc-500">2025 — Present</span>
          </div>

          <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs mb-3">
            <span className="text-zinc-200 font-semibold">Bytenodes</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-500">bytenodes.icu</span>
            <ExternalLink size={11} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
          </div>

          <p className="font-mono text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-3xl mb-4">
            Leading technical strategy, infrastructure architecture, and engineering operations.
            Overseeing server virtualization, network security, and embedded systems development.
          </p>

          <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-zinc-500">
            <span className="bg-[#121216] border border-[#222227] px-2 py-0.5">[Proxmox VE]</span>
            <span className="bg-[#121216] border border-[#222227] px-2 py-0.5">[Docker Systems]</span>
            <span className="bg-[#121216] border border-[#222227] px-2 py-0.5">[MikroTik CHR]</span>
            <span className="bg-[#121216] border border-[#222227] px-2 py-0.5">[Network Security]</span>
          </div>
        </div>
      </div>
    </a>
  </section>
);

export default ExperienceSection;