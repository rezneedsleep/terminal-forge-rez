import React from 'react';
import {
  Server, Container, Globe, Network,
  Database, HardDrive,
  Code, Terminal, Cog, ShieldCheck, Flame,
  Layers, Palette, Zap, Monitor
} from 'lucide-react';

const categories = [
  {
    title: 'Cloud & Infrastructure',
    items: [
      { icon: Server, name: 'Proxmox VE / KVM' },
      { icon: Container, name: 'Docker' },
      { icon: Globe, name: 'AWS' },
    ],
  },
  {
    title: 'Networking',
    items: [
      { icon: Globe, name: 'Cloudflare Tunnels' },
      { icon: Network, name: 'VLAN / DNS Management' },
      { icon: Network, name: 'MikroTik CHR' },
    ],
  },
  {
    title: 'Database & Storage',
    items: [
      { icon: Database, name: 'InnoDB' },
      { icon: Database, name: 'MySQL' },
      { icon: HardDrive, name: 'ZFS / LVM Storage' },
    ],
  },
  {
    title: 'Backend & Systems',
    items: [
      { icon: Terminal, name: 'Linux / Bash' },
      { icon: Code, name: 'Node.js / Python' },
      { icon: Cog, name: 'LXC / LXD' },
    ],
  },
  {
    title: 'Frontend Development',
    items: [
      { icon: Layers, name: 'React / Vite' },
      { icon: Palette, name: 'Tailwind CSS' },
      { icon: Zap, name: 'JavaScript / Typescript' },
    ],
  },
  {
    title: 'Security & Web Server',
    items: [
      { icon: ShieldCheck, name: 'VPN / WireGuard' },
      { icon: Flame, name: 'Firewall (iptables / UFW)' },
      { icon: Monitor, name: 'Nginx Proxy Manager' },
    ],
  },
];

import TextScramble from '@/components/TextScramble';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="w-full py-2 scroll-mt-14">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-2 mb-3 text-zinc-500 font-mono text-xs select-none">
        <div className="flex items-center gap-2">
          <span className="text-zinc-300">$</span>
          <span className="text-zinc-200">cat</span>
          <span className="text-zinc-400">
            <TextScramble text="skills.json" />
          </span>
          <span className="cursor-block text-zinc-500 text-[9px]" />
        </div>
        <span className="text-[10px] text-zinc-600 tracking-wider">[HOTKEY: S]</span>
      </div>

      <div className="text-[11px] font-bold tracking-[0.2em] text-zinc-300 uppercase mb-4 flex items-center gap-2 select-none">
        <span>SKILLS // TECHNICAL SPECIFICATIONS</span>
        <span className="h-px bg-zinc-800 flex-1" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {categories.map((cat, idx) => (
          <div
            key={cat.title}
            className="border border-[#27272a] bg-[#0c0c0f] p-4 transition-colors hover:border-[#3f3f46] relative group"
          >
            {/* Corner ASCII brackets */}
            <span className="absolute top-1 left-1.5 font-mono text-[9px] text-zinc-600 select-none">┌</span>
            <span className="absolute top-1 right-1.5 font-mono text-[9px] text-zinc-600 select-none">┐</span>
            <span className="absolute bottom-1 left-1.5 font-mono text-[9px] text-zinc-600 select-none">└</span>
            <span className="absolute bottom-1 right-1.5 font-mono text-[9px] text-zinc-600 select-none">┘</span>

            <div className="flex items-center justify-between border-b border-[#1c1c21] pb-2 mb-3 select-none">
              <h3 className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-wider">
                <TextScramble text={cat.title} />
              </h3>
              <span className="text-[10px] text-zinc-600 font-mono">0{idx + 1}</span>
            </div>

            <div className="space-y-2.5">
              {cat.items.map(({ icon: Icon, name }) => (
                <div key={name} className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors">
                  <Icon size={14} className="text-zinc-500 shrink-0" />
                  <span className="font-mono text-xs truncate">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;