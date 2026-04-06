import { useState } from 'react';
import Typewriter from './Typewriter';
import { Terminal } from 'lucide-react';
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
        <div className="flex flex-col sm:flex-row gap-10 items-center">
          {/* Left ~60% */}
          <div className="flex-[3] min-w-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold leading-tight mb-6">
              <span className="glow-cyan text-terminal-cyan">
                <Typewriter
                  text="Who Is rez?"
                  speed={45}
                  onComplete={() => setShowSub(true)}
                />
              </span>
            </h1>

            <p className={`text-muted-foreground font-mono text-sm md:text-base max-w-xl leading-relaxed transition-opacity duration-1000 ${showSub ? 'opacity-100' : 'opacity-0'}`}>
              Technical Student &amp; Embedded Systems Developer. Dedicated to building robust server infrastructures and secure IoT solutions. Expert in Virtualization, Network Tunneling, and Hardware Hacking.
            </p>
          </div>

          {/* Right ~40% */}
          <div className={`flex-[2] flex-shrink-0 transition-opacity duration-1000 ${showSub ? 'opacity-100' : 'opacity-0'}`}>
            <div
              className="w-48 h-48 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded border border-terminal-cyan/30 mx-auto overflow-hidden"
              style={{
                boxShadow: '0 0 20px hsl(185 100% 50% / 0.15), 0 0 40px hsl(185 100% 50% / 0.07)',
              }}
            >
              <img
                src={portraitSrc}
                alt="Rezky portrait"
                className="w-full h-full object-cover"
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
