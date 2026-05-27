import { useState } from 'react';
import Typewriter from './Typewriter';
import { Terminal, Instagram, Disc, Github } from 'lucide-react';
import portraitSrc from '@/assets/portrait.jpg';

const HeroSection = () => {
  const [showSub, setShowSub] = useState(false);

  return (
    // Tambahkan id="about" di sini
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-0 relative scroll-mt-20">
      <div className="max-w-5xl w-full">
        {/* Terminal prompt */}
        <div className="flex items-center gap-2 mb-6 text-terminal-dim font-mono text-sm">
          <Terminal size={16} />
          <span>rez@infra-audit:~$</span>
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

            {/* Social Links Section */}
            <div className={`mt-6 sm:mt-8 flex flex-wrap gap-4 sm:gap-8 transition-all duration-1000 delay-300 ${showSub ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a 
                href="https://github.com/rezneedsleep" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-terminal-dim hover:text-terminal-cyan transition-all"
              >
                <Github size={14} className="transition-transform group-hover:scale-110 group-hover:-rotate-6" />
                <span className="border-b border-transparent group-hover:border-terminal-cyan/50 pb-0.5">GITHUB</span>
              </a>

              <a 
                href="https://instagram.com/rez.css" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-terminal-dim hover:text-terminal-cyan transition-all"
              >
                <Instagram size={14} className="transition-transform group-hover:scale-110 group-hover:rotate-6" />
                <span className="border-b border-transparent group-hover:border-terminal-cyan/50 pb-0.5">INSTAGRAM</span>
              </a>

              <a 
                href="https://discord.com/users/864702111542673428" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-terminal-dim hover:text-terminal-cyan transition-all"
              >
                <Disc size={14} className="transition-transform group-hover:scale-110 group-hover:animate-pulse" />
                <span className="border-b border-transparent group-hover:border-terminal-cyan/50 pb-0.5">DISCORD</span>
              </a>
            </div>
          </div>

         {/* Right ~40% */}
          <div className={`flex-[2] flex-shrink-0 transition-opacity duration-1000 ${showSub ? 'opacity-100' : 'opacity-0'}`}>
            <div
              className="w-48 h-48 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded border border-terminal-cyan/30 mx-auto overflow-hidden relative group"
            >
              <img
                src={portraitSrc}
                alt="Rezky portrait"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            </div>
            <div className="mt-3 text-center font-mono text-[10px] text-terminal-dim">
              [ SRC_PATH: ~/users/rez ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;