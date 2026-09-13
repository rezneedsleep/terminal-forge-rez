import React from 'react';
import { Radio, Bluetooth, Server, BookOpen, ExternalLink, Cpu } from 'lucide-react';

interface ProjectData {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
  icon: React.ElementType;
}

const PROJECTS: ProjectData[] = [
  {
    id: 'marauder',
    name: 'ESP32 Marauder',
    category: 'Hardware / RF Security',
    description: 'Portable wireless auditing cyberdeck for 802.11 frame capture, PMKID harvesting, and BLE device enumeration.',
    tags: ['ESP32', 'RF Security', 'C++'],
    icon: Radio,
  },
  {
    id: 'blue-jammer',
    name: 'ESP32 Jammer',
    category: 'Hardware / RF Testing',
    description: 'Bluetooth signal testing tool analyzing BLE channel flooding and frequency hopping in isolated RF environments.',
    tags: ['ESP32', 'Bluetooth', 'Embedded'],
    icon: Bluetooth,
  },
  {
    id: 'bytenodes-panel',
    name: 'ByteNodes Panel',
    category: 'Cloud / Infrastructure',
    description: 'Enterprise game server & KVM cloud orchestration platform with bare-metal Proxmox nodes, automated Docker instances, and 1 Tbps DDoS mitigation.',
    tags: ['Proxmox', 'Docker', 'Pterodactyl'],
    link: 'https://panel.bytenodes.id',
    icon: Server,
  },
  {
    id: 'edutrack',
    name: 'EduTrack',
    category: 'Web App / Education',
    description: 'Academic productivity dashboard for students to manage schedules, assignments, deadlines, and GPA analytics.',
    tags: ['React', 'Vite', 'MySQL'],
    link: 'https://edutrack.davinn.net',
    icon: BookOpen,
  },
];

const FeaturedProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="w-full py-10 sm:py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium inline-flex items-center gap-1.5">
          <Cpu size={13} className="text-zinc-400" />
          <span>Projects</span>
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
        Featured Work & Prototypes.
      </h2>
      <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mb-6">
        Curated hardware prototypes, wireless security tools, and production web applications.
      </p>

      {/* Compact Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {PROJECTS.map((proj) => {
          const Icon = proj.icon;

          return (
            <article 
              key={proj.id}
              className="card-modern p-4 xs:p-5 sm:p-6 flex flex-col justify-between group hover:border-zinc-700 transition-all duration-200"
            >
              <div>
                {/* Header Meta: Category */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                    <Icon size={15} />
                  </div>
                  <span className="text-[11px] font-medium text-zinc-400">
                    {proj.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-zinc-100 transition-colors">
                  {proj.name}
                </h3>

                {/* Concise Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  {proj.description}
                </p>
              </div>

              {/* Bottom Row: Tags + Links */}
              <div className="pt-3 border-t border-zinc-850 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-zinc-900 text-zinc-300 text-[10px] border border-zinc-800 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {proj.link ? (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill-primary text-[11px] py-1.5 px-3 inline-flex items-center gap-1 active:scale-95 touch-manipulation"
                    >
                      <span>Live</span>
                      <ExternalLink size={11} />
                    </a>
                  ) : (
                    <span className="text-[10px] text-zinc-500 font-mono">
                      Lab
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;