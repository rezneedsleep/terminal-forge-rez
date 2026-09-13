import React from 'react';
import {
  Code2, Cpu, Server, ShieldCheck, Layers, Terminal, 
  Globe, Database, HardDrive, Zap, Network, Flame
} from 'lucide-react';

const CATEGORIES = [
  {
    title: 'Frontend & Full-Stack Web',
    icon: Code2,
    description: 'Modern, responsive, and performant web interfaces with clean architectures.',
    skills: ['React 18', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Embedded Systems & Hardware',
    icon: Cpu,
    description: 'Low-level microcontrollers, RF communication, and hardware security prototyping.',
    skills: ['ESP32 Dual-Core', 'Arduino', 'C / C++', '802.11 Wi-Fi', 'Bluetooth Low Energy', 'UART / SPI', 'TFT Displays'],
  },
  {
    title: 'Cloud & Virtualization',
    icon: Server,
    description: 'Self-hosted bare-metal clusters, hypervisors, and container orchestration.',
    skills: ['Proxmox VE (KVM)', 'Docker', 'LXC Containers', 'Debian Linux', 'ZFS Storage', 'Systemd'],
  },
  {
    title: 'Networking & Security',
    icon: ShieldCheck,
    description: 'Encrypted network routing, tunneling, access management, and threat testing.',
    skills: ['MikroTik RouterOS', 'Cloudflare Tunnels', 'WireGuard VPN', 'Nginx Proxy', 'DNS / VLAN', 'Firewall (UFW)'],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="services" className="w-full py-10 sm:py-16 scroll-mt-24">
      {/* Section Tag */}
      <div className="flex items-center gap-2 mb-3">
        <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium inline-flex items-center gap-1.5">
          <Code2 size={13} className="text-zinc-400" />
          <span>Services & Skills</span>
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2 sm:mb-3">
        Full-stack versatility from UI to silicon.
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-2xl mb-6 sm:mb-8">
        A deep toolkit combining software design principles, low-level firmware engineering, and Linux system administration.
      </p>

      {/* Grid of skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {CATEGORIES.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <div 
              key={cat.title}
              className="card-modern p-4.5 xs:p-5 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-200">
                    <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <span className="text-xs font-mono text-zinc-600">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4 sm:mb-6">
                  {cat.description}
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-zinc-850 flex flex-wrap gap-1.5 sm:gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 sm:px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-[11px] sm:text-xs font-medium transition-colors hover:border-zinc-700 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;