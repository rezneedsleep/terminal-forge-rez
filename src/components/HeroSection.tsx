import { useState } from 'react';
import Typewriter from './Typewriter';
import { Terminal, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [showSub, setShowSub] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl w-full">
        {/* Terminal prompt */}
        <div className="flex items-center gap-2 mb-6 text-terminal-dim font-mono text-sm">
          <Terminal size={16} />
          <span>rez@infra:~$</span>
          <span className="text-terminal-green">cat</span>
          <span>intro.txt</span>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-bold leading-tight mb-6">
          <span className="glow-cyan text-terminal-cyan">
            <Typewriter
              text="Who Is rez?"
              speed={45}
              onComplete={() => setShowSub(true)}
            />
          </span>
        </h1>

        {/* Introduction */}
        <div
          className={`transition-opacity duration-1000 ${showSub ? 'opacity-100' : 'opacity-0'}`}
        >
          <p className="text-muted-foreground font-mono text-sm md:text-base max-w-2xl leading-relaxed mt-4">
            <ChevronRight size={14} className="inline text-terminal-cyan mr-1" />
            <span className="text-terminal-green font-semibold">Background:</span>{' '}
            Technical Student specializing in IT Infrastructure and Embedded Systems.
          </p>

          <p className="text-muted-foreground font-mono text-sm md:text-base max-w-2xl leading-relaxed mt-4">
            <ChevronRight size={14} className="inline text-terminal-cyan mr-1" />
            <span className="text-terminal-green font-semibold">Core Expertise:</span>{' '}
            Server Administration (Proxmox, Pterodactyl), Network Tunneling (Cloudflare, WireGuard), and IoT/Hardware Hacking.
          </p>

          <div className="flex flex-wrap gap-3 mt-8 font-mono text-xs">
            {['PROXMOX', 'ESP32', 'WIREGUARD', 'CLOUDFLARE', 'ARDUINO'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 border border-border rounded-sm text-terminal-dim hover:text-terminal-cyan hover:border-terminal-cyan/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
