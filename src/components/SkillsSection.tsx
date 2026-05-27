import {
  Server, Container, Globe, Network,
  Database, HardDrive,
  Code, Terminal, Cog, Lock, ShieldCheck, Flame,
  Layers, Palette, Zap, Box
} from 'lucide-react';

const categories = [
  {
    title: 'Cloud & Infrastructure',
    color: 'text-terminal-cyan',
    items: [
      { icon: Server, name: 'Proxmox VE' },
      { icon: Container, name: 'Docker' },
      { icon: Globe, name: 'AWS' },
    ],
  },
  {
    title: 'Networking',
    color: 'text-terminal-green',
    items: [
      { icon: Globe, name: 'Cloudflare Tunnels' },
      { icon: Network, name: 'VLAN / DNS Management' },
      { icon: Network, name: 'Mikrotik CHR' },
    ],
  },
  {
    title: 'Database & Storage',
    color: 'text-terminal-green',
    items: [
      { icon: Database, name: 'MariaDB' },
      { icon: Database, name: 'MySQL' },
      { icon: HardDrive, name: 'ZFS / LVM Storage' },
    ],
  },
  {
    title: 'Backend & Systems',
    color: 'text-terminal-cyan',
    items: [
      { icon: Terminal, name: 'Linux / Bash' },
      { icon: Code, name: 'Node.js / Python' },
      { icon: Cog, name: 'Docker / LXC' },
    ],
  },
  {
    title: 'Frontend',
    color: 'text-[#7986cb]',
    items: [
      { icon: Layers, name: 'React / Vite' },
      { icon: Palette, name: 'Tailwind CSS' },
      { icon: Zap, name: 'JavaScript / JSX' },
    ],
  },
  {
    title: 'Security',
    color: 'text-terminal-cyan',
    items: [
      { icon: Lock, name: 'Cloudflare SSL/TLS' },
      { icon: ShieldCheck, name: 'VPN / WireGuard' },
      { icon: Flame, name: 'Firewall Config (iptables)' },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="px-4 sm:px-6 py-24 scroll-mt-20 section-animate">
      <div className="max-w-5xl mx-auto"> 
        <div className="flex items-center gap-2 mb-6 text-terminal-dim font-mono text-sm">
          <span className="text-terminal-green">$</span>
          <span className="text-terminal-green">cat</span>
          <span> ls -la skills</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-10">
          Technical Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="border border-border rounded-lg bg-card p-6 hover:border-terminal-cyan/20 transition-colors"
            >
              <h3 className={`font-mono text-sm font-semibold mb-5 ${cat.color}`}>
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.items.map(({ icon: Icon, name }) => (
                  <div key={name} className="flex items-center gap-3">
                    <Icon size={16} className="text-terminal-dim" />
                    <span className="font-mono text-sm text-foreground">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;