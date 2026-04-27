import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (hash: string) => {
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-black/20 backdrop-blur-sm border-b border-white/5">
      <a href="/" className="font-mono text-sm tracking-[0.2em] text-white/90 hover:text-terminal-cyan transition-colors">
        rez
      </a>
      <div className="flex gap-8 items-center">
        <button onClick={() => handleNav('#work')} className="font-mono text-[11px] tracking-[0.3em] text-terminal-dim hover:text-terminal-cyan transition-colors uppercase bg-transparent border-none cursor-pointer">
          Work
        </button>
        <button onClick={() => handleNav('#about')} className="font-mono text-[11px] tracking-[0.3em] text-terminal-dim hover:text-terminal-cyan transition-colors uppercase bg-transparent border-none cursor-pointer">
          About
        </button>
        <a href="https://blog.vstn.cloud" target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] tracking-[0.3em] text-terminal-dim hover:text-terminal-cyan transition-colors uppercase">
          Logs
        </a>
        <a href="/contact" className="font-mono text-[11px] tracking-[0.3em] uppercase px-4 py-2 border border-terminal-cyan/50 text-terminal-cyan hover:bg-terminal-cyan/10 transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;