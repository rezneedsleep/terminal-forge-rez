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

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left: Text */}
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold leading-tight mb-6">
              <span className="glow-cyan text-terminal-cyan">
                <Typewriter
                  text="Who Is rez?"
                  speed={45}
                  onComplete={() => setShowSub(true)}
                />
              </span>
            </h1>

            <div className={`transition-opacity duration-1000 ${showSub ? 'opacity-100' : 'opacity-0'}`}>
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

          {/* Right: Portrait */}
          <div className={`flex-shrink-0 self-center md:self-start md:mt-2 transition-opacity duration-1000 ${showSub ? 'opacity-100' : 'opacity-0'}`}>
            <div
              className="relative w-52 h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded border border-terminal-cyan/30"
              style={{
                boxShadow: '0 0 20px hsl(185 100% 50% / 0.15), 0 0 40px hsl(185 100% 50% / 0.07)',
              }}
            >
              <img
                src={portraitSrc}
                alt="Rezky portrait"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="mt-3 text-center font-mono text-[10px] text-terminal-dim">
              [ ASSET_ID: rez.portrait ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
