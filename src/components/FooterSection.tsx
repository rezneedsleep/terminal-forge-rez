import React from 'react';

const FooterSection: React.FC = () => (
  <footer className="w-full py-10 pb-16 border-t border-[#1e1e23] section-animate select-none">
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-500 font-mono text-xs">
      <p className="flex items-center gap-2">
        <span className="text-zinc-400">© {new Date().getFullYear()} rez</span>
        <span className="text-zinc-700">•</span>
        <span>Infrastructure & Embedded Systems</span>
      </p>
      <div className="flex items-center gap-3 text-[11px] text-zinc-600">
        <span>CyberOS v1.0.8</span>
        <span>•</span>
        <span className="text-zinc-400 font-semibold flex items-center gap-1">
          <span className="inline-block w-1.5 h-1.5 bg-zinc-400 rounded-full animate-pulse" />
          ONLINE 200 OK
        </span>
      </div>
    </div>
  </footer>
);

export default FooterSection;