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
              text="Optimizing Virtualization."
              speed={45}
              onComplete={() => setShowSub(true)}
            />
          </span>
          {showSub && (
            <span className="block mt-2 glow-green text-terminal-green">
              <Typewriter text="Securing the Physical World." speed={45} />
            </span>
          )}
        </h1>

        {/* Sub-headline */}
        <div
          className={`transition-opacity duration-1000 ${showSub ? 'opacity-100' : 'opacity-0'}`}
        >
          <p className="text-muted-foreground font-mono text-sm md:text-base max-w-2xl leading-relaxed mt-8">
            <ChevronRight size={14} className="inline text-terminal-cyan mr-1" />
            Proxmox virtualization architect. IoT firmware engineer. Building resilient
            infrastructure and embedded systems that operate at the edge.
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
