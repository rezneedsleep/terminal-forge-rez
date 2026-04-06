import {
  Server, Container, Monitor, Globe, Shield, Network,
  Cpu, CircuitBoard, Radio
} from 'lucide-react';

const categories = [
  {
    title: 'Infrastructure',
    color: 'text-terminal-cyan',
    items: [
      { icon: Server, name: 'Proxmox VE' },
      { icon: Container, name: 'Pterodactyl' },
      { icon: Monitor, name: 'Windows Spectre' },
    ],
  },
  {
    title: 'Networking',
    color: 'text-terminal-green',
    items: [
      { icon: Globe, name: 'Cloudflare Tunnels' },
      { icon: Shield, name: 'WireGuard' },
      { icon: Network, name: 'Mikrotik CHR' },
    ],
  },
  {
    title: 'Embedded Systems',
    color: 'text-terminal-cyan',
    items: [
      { icon: Cpu, name: 'ESP32' },
      { icon: CircuitBoard, name: 'Arduino' },
      { icon: Radio, name: 'HC-SR04 / I2C LCD' },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-xs text-terminal-dim mb-4 flex items-center gap-2">
          <span className="text-terminal-green">$</span> ls -la skills/
        </div>

        <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-10">
          Technical Stack
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
