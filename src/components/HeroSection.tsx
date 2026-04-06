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
        <div className="flex flex-col sm:flex-row gap-10 items-start">
          {/* Left column ~60% */}
          <div className="flex-[3] min-w-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold leading-tight mb-4">
              <span className="glow-cyan text-terminal-cyan">
                <Typewriter
                  text="Who Is rez?"
                  speed={45}
                  onComplete={() => setShowSub(true)}
                />
              </span>
            </h1>

            <div className={`transition-opacity duration-1000 ${showSub ? 'opacity-100' : 'opacity-0'}`}>
              {/* Personal intro */}
              <p className="text-muted-foreground font-mono text-sm md:text-base max-w-xl leading-relaxed mt-4">
                Technical Student &amp; Embedded Systems Developer. Dedicated to building robust server infrastructures and secure IoT solutions. Expert in Virtualization, Network Tunneling, and Hardware Hacking.
              </p>

              <p className="text-muted-foreground font-mono text-sm md:text-base max-w-xl leading-relaxed mt-6">
                <ChevronRight size={14} className="inline text-terminal-cyan mr-1" />
                <span className="text-terminal-green font-semibold">Background:</span>{' '}
                Technical Student specializing in IT Infrastructure and Embedded Systems.
              </p>

              <p className="text-muted-foreground font-mono text-sm md:text-base max-w-xl leading-relaxed mt-4">
                <ChevronRight size={14} className="inline text-terminal-cyan mr-1" />
                <span className="text-terminal-green font-semibold">Core Expertise:</span>{' '}
                Server Administration (Proxmox, Pterodactyl), Network Tunneling (Cloudflare, WireGuard), and IoT/Hardware Hacking.
              </p>
            </div>
          </div>

          {/* Right column ~40% - Portrait */}
          <div className={`flex-[2] flex-shrink-0 self-center sm:self-start sm:mt-2 transition-opacity duration-1000 ${showSub ? 'opacity-100' : 'opacity-0'}`}>
            <div
              className="relative w-52 h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded border border-terminal-cyan/30 mx-auto"
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
