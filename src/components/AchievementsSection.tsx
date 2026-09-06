import React from 'react';
import { Lock } from 'lucide-react';
import TextScramble from '@/components/TextScramble';

const AchievementsSection: React.FC = () => (
  <section id="achievements" className="w-full py-2 scroll-mt-14">
    {/* Section Header */}
    <div className="flex items-center justify-between gap-2 mb-3 text-zinc-500 font-mono text-xs select-none">
      <div className="flex items-center gap-2">
        <span className="text-zinc-300">$</span>
        <span className="text-zinc-200">gpg</span>
        <span className="text-zinc-400">
          <TextScramble text="--decrypt achievements.asc" />
        </span>
        <span className="cursor-block text-zinc-500 text-[9px]" />
      </div>
      <span className="text-[10px] text-zinc-600 tracking-wider">[HOTKEY: !]</span>
    </div>

    <div className="text-[11px] font-bold tracking-[0.2em] text-zinc-300 uppercase mb-4 flex items-center gap-2 select-none">
      <span>ACHIEVEMENTS // ENCRYPTED STORAGE</span>
      <span className="h-px bg-zinc-800 flex-1" />
    </div>

    {/* Encrypted Block with ASCII Corners */}
    <div className="border border-dashed border-[#2b2b32] bg-[#0a0a0d] p-8 sm:p-12 flex flex-col items-center justify-center text-center select-none relative">
      {/* Corner ASCII brackets */}
      <span className="absolute top-1 left-1.5 font-mono text-[10px] text-zinc-600 select-none">┌</span>
      <span className="absolute top-1 right-1.5 font-mono text-[10px] text-zinc-600 select-none">┐</span>
      <span className="absolute bottom-1 left-1.5 font-mono text-[10px] text-zinc-600 select-none">└</span>
      <span className="absolute bottom-1 right-1.5 font-mono text-[10px] text-zinc-600 select-none">┘</span>

      <div className="w-12 h-12 border border-[#27272a] bg-[#121216] flex items-center justify-center mb-4 text-zinc-400">
        <Lock size={20} />
      </div>

      <h3 className="font-mono text-base font-bold text-zinc-200 mb-2">
        <TextScramble text="[ENCRYPTED ARCHIVE: 0x414348]" />
      </h3>

      <p className="font-mono text-xs text-zinc-500 max-w-md mb-5 leading-relaxed">
        Certifications, awards, and CTF writeups are stored in GPG-encrypted blocks.
      </p>

      <div className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 bg-[#121216] border border-[#27272a] text-zinc-300">
        <span className="inline-block w-2 h-2 bg-zinc-400 animate-ping rounded-full" />
        <span className="font-semibold text-zinc-200">STATUS:</span>
        <span className="text-zinc-400">Decryption key coming soon...</span>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
