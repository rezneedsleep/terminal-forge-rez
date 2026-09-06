import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowLeft, Terminal } from 'lucide-react';
import TextScramble from '@/components/TextScramble';
import { playKeySound } from '@/lib/terminalAudio';

const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const primaryEmail = 'zyxienn21@gmail.com';

  const handleCopyEmail = () => {
    playKeySound();
    navigator.clipboard.writeText(primaryEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="w-full space-y-6">
      {/* Top Terminal Breadcrumb & Return Link */}
      <div className="flex items-center justify-between gap-2 text-zinc-500 font-mono text-xs select-none">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-zinc-400" />
          <span className="text-zinc-400">rez@infra-audit:~$</span>
          <span className="text-zinc-200">./</span>
          <span className="text-zinc-400">
            <TextScramble text="c-mail.sh" />
          </span>
          <span className="cursor-block text-zinc-500 text-[9px]" />
        </div>
        <a 
          href="/" 
          onClick={() => playKeySound()}
          className="btn-tui text-xs text-zinc-300 hover:text-white active:scale-[0.97]"
          title="Return to Workstation"
        >
          <ArrowLeft size={12} />
          <span>[ESC] cd ~ (Home)</span>
        </a>
      </div>

      {/* Section Header Label */}
      <div className="text-[11px] font-bold tracking-[0.2em] text-zinc-300 uppercase flex items-center gap-2 select-none">
        <span>C-MAIL // COMMUNICATIONS & TRANSMISSION</span>
        <span className="h-px bg-zinc-800 flex-1" />
      </div>

      {/* Main Transmission Card with ASCII Corners */}
      <div className="border border-[#27272a] bg-[#0c0c0f] p-4 sm:p-8 space-y-6 relative">
        {/* Corner ASCII brackets */}
        <span className="absolute top-1 left-1.5 font-mono text-[10px] text-zinc-600 select-none">┌</span>
        <span className="absolute top-1 right-1.5 font-mono text-[10px] text-zinc-600 select-none">┐</span>
        <span className="absolute bottom-1 left-1.5 font-mono text-[10px] text-zinc-600 select-none">└</span>
        <span className="absolute bottom-1 right-1.5 font-mono text-[10px] text-zinc-600 select-none">┘</span>

        {/* Header line */}
        <div className="border-b border-[#1c1c21] pb-4">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h1 className="font-mono text-lg sm:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
              <TextScramble text="Direct Transmission Link" />
              <span className="text-[9px] bg-[#18181c] text-zinc-400 border border-zinc-700 px-1.5 py-0.5">
                ACTIVE 200 OK
              </span>
            </h1>
            <span className="text-zinc-500 text-xs font-mono">NODE: vstn.cloud</span>
          </div>
          <p className="text-zinc-400 font-mono text-xs sm:text-sm leading-relaxed max-w-2xl">
            Available for server virtualization, embedded IoT hardware research, full-stack consulting, and security auditing. Choose a communication channel below.
          </p>
        </div>

        {/* Communication Channels Grid */}
        <div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold mb-3 select-none">
            AVAILABLE CHANNELS:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Primary Email */}
            <div className="border border-[#222226] bg-[#101014] p-3.5 sm:p-4 flex items-center justify-between gap-3 group hover:border-[#38383e] transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 border border-[#27272d] bg-[#16161c] text-zinc-300 shrink-0">
                  <Mail size={16} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] text-zinc-500 uppercase">Primary C-Mail</p>
                  <p className="font-mono text-xs sm:text-sm text-zinc-200 truncate">{primaryEmail}</p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="btn-tui text-[11px] shrink-0 cursor-pointer active:scale-[0.97]"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={12} className="text-zinc-200" /> : <Copy size={12} />}
                <span>{copiedEmail ? 'Copied' : '[C] Copy'}</span>
              </button>
            </div>

            {/* WhatsApp Direct Relay */}
            <a
              href="https://api.whatsapp.com/send?text=Hi%20rez,%20I%20contacted%20you%20from%20vstn.cloud"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playKeySound()}
              className="border border-[#222226] bg-[#101014] p-3.5 sm:p-4 flex items-center justify-between gap-3 group hover:border-[#38383e] transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 border border-[#27272d] bg-[#16161c] text-zinc-300 shrink-0">
                  <Phone size={16} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] text-zinc-500 uppercase">WhatsApp Direct Link</p>
                  <p className="font-mono text-xs sm:text-sm text-zinc-200 group-hover:text-white truncate">
                    +62 8•• •••• ••••
                  </p>
                </div>
              </div>
              <span className="btn-tui text-[11px] shrink-0">
                <span>[W] Chat</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;