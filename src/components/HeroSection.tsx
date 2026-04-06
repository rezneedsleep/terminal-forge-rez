import { useState } from 'react';
import Typewriter from './Typewriter';
import { Terminal, ChevronRight } from 'lucide-react';
import portraitSrc from '@/assets/portrait.jpg';

const HeroSection = () => {
  const [showSub, setShowSub] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-5xl w-full">
        {/* Terminal prompt */}
        <div className="flex items-center gap-2 mb-6 text-terminal-dim font-mono text-sm">
          <Terminal size={16} />
          <span>rez@infra:~$</span>
          <span className="text-terminal-green">cat</span>
          <span>intro.txt</span>
        </div>

        {/* Main layout: text + portrait */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Text content */}
          <div className="flex-1 min-w-0">
            {/* Main headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold leading-tight mb-6">
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
              <p className="text-muted-foreground font-mono text-sm md:text-base max-w-xl leading-relaxed mt-4">
                <ChevronRight size={14} className="inline text-terminal-cyan mr-1" />
                <span className="text-terminal-green font-semibold">Background:</span>{' '}
                Technical Student specializing in IT Infrastructure and Embedded Systems.
              </p>

              <p className="text-muted-foreground font-mono text-sm md:text-base max-w-xl leading-relaxed mt-4">
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

          {/* Glitch portrait */}
          <div
            className={`relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex-shrink-0 self-center md:self-start md:mt-4 transition-opacity duration-1000 ${showSub ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Scanline overlay on portrait */}
            <div className="absolute inset-0 z-10 pointer-events-none rounded border border-terminal-cyan/20"
              style={{
                background: `repeating-linear-gradient(0deg, transparent, transparent 2px, hsla(185, 100%, 50%, 0.03) 2px, hsla(185, 100%, 50%, 0.03) 4px)`,
              }}
            />
            {/* Glitch bars */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded">
              <div className="absolute top-[20%] left-0 w-full h-[2px] bg-terminal-cyan/20" style={{ transform: 'translateX(3px)' }} />
              <div className="absolute top-[45%] left-0 w-full h-[1px] bg-terminal-green/15" style={{ transform: 'translateX(-2px)' }} />
              <div className="absolute top-[70%] left-0 w-full h-[3px] bg-terminal-cyan/10" style={{ transform: 'translateX(5px)' }} />
              <div className="absolute top-[85%] left-0 w-[60%] h-[1px] bg-terminal-green/20" style={{ transform: 'translateX(8px)' }} />
            </div>
            {/* Corner brackets */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-terminal-cyan/40 z-20" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-terminal-cyan/40 z-20" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-terminal-cyan/40 z-20" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-terminal-cyan/40 z-20" />
            {/* Label */}
            <div className="absolute -bottom-6 left-0 right-0 text-center font-mono text-[10px] text-terminal-dim z-20">
              [ ASSET_ID: rez.portrait ]
            </div>
            {/* The image */}
            <img
              src={portraitSrc}
              alt="rez portrait"
              className="w-full h-full object-cover rounded"
              style={{
                filter: 'grayscale(100%) contrast(1.3) brightness(0.6)',
                mixBlendMode: 'luminosity',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
