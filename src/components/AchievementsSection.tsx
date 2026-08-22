import { Lock } from 'lucide-react';

const AchievementsSection = () => (
  <section className="px-4 sm:px-6 py-24 scroll-mt-20 section-animate border-t border-border/50 border-dashed bg-black/20">
    <div className="max-w-5xl mx-auto flex flex-col items-center justify-center py-12 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-border bg-background/50 mb-6 shadow-[0_0_15px_-3px] shadow-black">
        <Lock className="text-terminal-dim" size={24} />
      </div>
      <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-4">
        Achievements
      </h2>
      <div className="inline-flex items-center gap-2 font-mono text-sm px-4 py-2 bg-muted/30 border border-border rounded text-terminal-dim">
        <span className="text-terminal-cyan animate-pulse">█</span> 
        Data encrypted. Decryption key coming soon...
      </div>
    </div>
  </section>
);

export default AchievementsSection;
