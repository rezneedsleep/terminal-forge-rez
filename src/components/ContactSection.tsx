import { Mail, Phone, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('zyxienn@vstn.cloud');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="px-4 sm:px-6 py-24 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="fade-in-1 flex items-center gap-2 mb-10 text-terminal-dim font-mono text-sm">
          <span className="text-terminal-green">$</span>
          <span className="text-terminal-green">ls</span>
          <span>-la details/</span>
        </div>

        <div className="fade-in-2 border border-border rounded-lg bg-card p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-16 h-px bg-terminal-cyan/40" />
          <div className="absolute top-0 left-0 h-16 w-px bg-terminal-cyan/40" />
          <div className="absolute bottom-0 right-0 w-16 h-px bg-terminal-cyan/40" />
          <div className="absolute bottom-0 right-0 h-16 w-px bg-terminal-cyan/40" />

          <h2 className="fade-in-3 text-2xl md:text-3xl font-mono font-bold text-foreground mb-2">
            Tech-Stack Contact Section
          </h2>
          <p className="fade-in-4 text-muted-foreground font-mono text-sm leading-relaxed mb-10 max-w-xl">
            Available for freelance development and technical consulting. Let's optimize your workflow together.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={handleCopyEmail}
              className="fade-in-5 flex items-center gap-4 p-4 border border-border rounded-md bg-background hover:border-terminal-cyan/40 transition-colors group text-left w-full"
            >
              <Mail size={20} className="text-terminal-cyan shrink-0" />
              <div className="flex-1">
                <p className="font-mono text-xs text-terminal-dim mb-1">Email</p>
                <p className="font-mono text-sm text-foreground group-hover:text-terminal-cyan transition-colors">zyxienn@vstn.cloud</p>
              </div>
              {copied
                ? <Check size={16} className="text-terminal-green shrink-0" />
                : <Copy size={16} className="text-terminal-dim group-hover:text-terminal-cyan shrink-0 transition-colors" />
              }
            </button>

            <a href="https://wa.me/1XXXXXXXX" target="_blank" rel="noopener noreferrer" className="fade-in-5 flex items-center gap-4 p-4 border border-border rounded-md bg-background hover:border-terminal-cyan/40 transition-colors group">
              <Phone size={20} className="text-terminal-cyan" />
              <div>
                <p className="font-mono text-xs text-terminal-dim mb-1">WhatsApp</p>
                <p className="font-mono text-sm text-foreground group-hover:text-terminal-cyan transition-colors">+62XXXXXXXXXX</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;