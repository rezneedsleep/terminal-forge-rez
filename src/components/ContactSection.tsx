import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Copy, Check, ArrowLeft, Terminal } from 'lucide-react';
import TextScramble from '@/components/TextScramble';

const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const primaryEmail = 'zyxienn21@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(primaryEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="w-full space-y-6">
      {/* Top Terminal Breadcrumb & Return Link */}
      <div className="flex items-center justify-between gap-2 text-zinc-500 font-mono text-xs select-none">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 truncate">
          <Terminal size={14} className="text-zinc-400 shrink-0" />
          <span className="text-zinc-400 shrink-0">
            <span className="hidden sm:inline">rez@infra-audit:~$</span>
            <span className="sm:hidden">rez:~$</span>
          </span>
          <span className="text-zinc-200 shrink-0">./</span>
          <span className="text-zinc-400 truncate">
            <TextScramble text="c-mail.sh" />
          </span>
          <span className="cursor-block text-zinc-500 text-[9px] shrink-0" />
        </div>
        <Link 
          to="/" 
          className="btn-tui text-xs text-zinc-300 hover:text-white active:scale-[0.97] shrink-0"
          title="Return to Workstation"
        >
          <ArrowLeft size={12} />
          <span className="hidden sm:inline">[ESC] cd ~ (Home)</span>
          <span className="sm:hidden">[ESC] Home</span>
        </Link>
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-mono text-base sm:text-2xl font-bold text-white tracking-wide">
                <TextScramble text="Direct Transmission Link" />
              </h1>
              <span className="text-[9px] bg-[#18181c] text-zinc-400 border border-zinc-700 px-1.5 py-0.5 shrink-0">
                ACTIVE 200 OK
              </span>
            </div>
            <span className="text-zinc-500 text-xs font-mono shrink-0">NODE: vstn.cloud</span>
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
            <div className="border border-[#222226] bg-[#101014] p-3 sm:p-4 flex items-center justify-between gap-2.5 group hover:border-[#38383e] transition-colors">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-2 border border-[#27272d] bg-[#16161c] text-zinc-300 shrink-0">
                  <Mail size={15} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[9px] sm:text-[10px] text-zinc-500 uppercase">Primary C-Mail</p>
                  <p className="font-mono text-[11px] sm:text-sm text-zinc-200 truncate select-all">{primaryEmail}</p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="btn-tui text-[11px] shrink-0 cursor-pointer active:scale-[0.97] px-2 py-1"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={12} className="text-zinc-200" /> : <Copy size={12} />}
                <span className="hidden sm:inline">{copiedEmail ? 'Copied' : '[C] Copy'}</span>
                <span className="sm:hidden">{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* WhatsApp Direct Relay */}
            <a
              href="https://api.whatsapp.com/send?text=Hi%20rez,%20I%20contacted%20you%20from%20vstn.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#222226] bg-[#101014] p-3 sm:p-4 flex items-center justify-between gap-2.5 group hover:border-[#38383e] transition-colors"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-2 border border-[#27272d] bg-[#16161c] text-zinc-300 shrink-0">
                  <Phone size={15} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[9px] sm:text-[10px] text-zinc-500 uppercase">WhatsApp Direct Link</p>
                  <p className="font-mono text-[11px] sm:text-sm text-zinc-200 group-hover:text-white truncate">
                    +62 8•• •••• ••••
                  </p>
                </div>
              </div>
              <span className="btn-tui text-[11px] shrink-0 px-2 py-1">
                <span className="hidden sm:inline">[W] Chat</span>
                <span className="sm:hidden">Chat</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;