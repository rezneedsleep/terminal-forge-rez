import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowRight, MessageSquare, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const primaryEmail = 'zyxienn21@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(primaryEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="w-full py-16 scroll-mt-20">
      {/* Section Tag */}
      <div className="flex items-center gap-2 mb-3">
        <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium inline-flex items-center gap-1.5">
          <Mail size={13} className="text-zinc-400" />
          <span>Get in Touch</span>
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
        Let's build something exceptional together.
      </h2>
      <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mb-8">
        Have an upcoming project, freelance inquiry, or need embedded systems and cloud infrastructure consulting? Connect directly below.
      </p>

      {/* Main Contact Container Card */}
      <div className="card-modern p-6 sm:p-9 relative overflow-hidden">
        {/* Subtle Ambient Backlight */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* Email Channel Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col justify-between group hover:border-zinc-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-750 flex items-center justify-center text-zinc-200">
                  <Mail size={18} />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  Direct Inbox
                </span>
              </div>

              <h3 className="text-sm font-semibold text-zinc-400 mb-1">
                Email Address
              </h3>
              <p className="text-base sm:text-lg font-bold text-white mb-4 select-all font-mono">
                {primaryEmail}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-zinc-800/60">
              <a
                href={`mailto:${primaryEmail}`}
                className="btn-pill-primary text-xs py-2 px-4 flex-1 text-center"
              >
                <span>Compose Mail</span>
                <Send size={12} />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2.5 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors cursor-pointer"
                title="Copy Email Address"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          {/* WhatsApp Channel Card */}
          <a
            href="https://api.whatsapp.com/send?text=Hi%20rez,%20I%20contacted%20you%20from%20vstn.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col justify-between group hover:border-zinc-700 transition-colors block text-left"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-750 flex items-center justify-center text-zinc-200">
                  <Phone size={18} />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Instant Chat
                </span>
              </div>

              <h3 className="text-sm font-semibold text-zinc-400 mb-1">
                WhatsApp Direct Link
              </h3>
              <p className="text-base sm:text-lg font-bold text-white mb-4 font-mono group-hover:text-emerald-300 transition-colors">
                +62 8•• •••• ••••
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between">
              <span className="text-xs text-zinc-400">Direct encrypted chat</span>
              <span className="btn-pill-secondary text-xs py-2 px-4 group-hover:bg-zinc-800 group-hover:text-white inline-flex items-center gap-1.5">
                <span>Start Chat</span>
                <ArrowRight size={13} />
              </span>
            </div>
          </a>
        </div>

        {/* Bottom Availability Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 pt-4 border-t border-zinc-850">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Response turnaround usually within 24 hours</span>
          </div>
          <div className="font-mono text-zinc-500 text-[11px]">
            NODE: vstn.cloud // Jakarta UTC+7
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;