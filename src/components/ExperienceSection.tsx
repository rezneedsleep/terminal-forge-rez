import { Building2 } from 'lucide-react';

const ExperienceSection = () => (
  <section id="work" className="px-4 sm:px-6 py-24 scroll-mt-20 section-animate">
    <div className="max-w-5xl mx-auto"> 
        {/* Prompt Terminal */}
        <div className="flex items-center gap-2 mb-6 text-terminal-dim font-mono text-sm">
          <span className="text-terminal-green">$</span>
          <span className="text-terminal-green">cat</span>
          <span>experience.log</span>
        </div>

      <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-10">
        Experience
      </h2>

  <a href="https://bytenodes.icu" target="_blank" rel="noopener noreferrer" className="border border-border rounded-lg bg-card p-6 md:p-8 hover:border-terminal-cyan/20 transition-all duration-300 group block">
  <div className="flex items-start gap-4">
    <Building2 size={22} className="text-terminal-cyan mt-1 shrink-0 group-hover:scale-110 transition-transform" />
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
        <h3 className="font-mono text-base sm:text-lg font-bold text-foreground">
          Chief Technology Officer
        </h3>
        <span className="font-mono text-xs text-terminal-dim">2025 — Present</span>
      </div>
      <p className="font-mono text-sm text-terminal-cyan mb-3">Bytenodes</p>
      <p className="text-muted-foreground text-sm leading-relaxed">
        Leading technical strategy, infrastructure architecture, and engineering operations.
        Overseeing server virtualization, network security, and embedded systems development.
      </p>
    </div>
  </div>
</a>
    </div>
  </section>
);

export default ExperienceSection;