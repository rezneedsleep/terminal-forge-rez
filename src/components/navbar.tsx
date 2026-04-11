const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-black/20 backdrop-blur-sm border-b border-white/5">
      <div className="font-mono text-sm tracking-[0.2em] text-white/90">
        rez
      </div>

      <div className="flex gap-8 items-center">
        <a href="#work" className="font-mono text-[11px] tracking-[0.3em] text-terminal-dim hover:text-terminal-cyan transition-colors uppercase">
          Work
        </a>

        <a href="#about" className="font-mono text-[11px] tracking-[0.3em] text-terminal-dim hover:text-terminal-cyan transition-colors uppercase">
          About
        </a>

        <a href="mailto:zyxienn@vstn.cloud" className="font-mono text-[11px] tracking-[0.3em] uppercase px-4 py-2 border border-terminal-cyan/50 text-terminal-cyan hover:bg-terminal-cyan/10 transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;