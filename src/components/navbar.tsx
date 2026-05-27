import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (hash: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinkClass = "font-mono text-[11px] tracking-[0.3em] text-terminal-dim hover:text-terminal-cyan transition-colors uppercase bg-transparent border-none cursor-pointer";
  const navLinkMobile = "font-mono text-sm tracking-[0.3em] text-terminal-dim hover:text-terminal-cyan transition-colors uppercase bg-transparent border-none cursor-pointer py-3 text-center";

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/5 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <a href="/" className="font-mono text-sm tracking-[0.2em] text-white/90 hover:text-terminal-cyan transition-colors">
          rez
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex gap-8 items-center">
          <button onClick={() => handleNav('#work')} className={navLinkClass}>
            Work
          </button>
          <button onClick={() => handleNav('#about')} className={navLinkClass}>
            About
          </button>
          <a href="https://blog.vstn.cloud" target="_blank" rel="noopener noreferrer" className={navLinkClass}>
            Logs
          </a>
          <a href="/contact" className="font-mono text-[11px] tracking-[0.3em] uppercase px-4 py-2 border border-terminal-cyan/50 text-terminal-cyan hover:bg-terminal-cyan/10 transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-terminal-dim hover:text-terminal-cyan transition-colors bg-transparent border-none cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-2 sm:hidden animate-fade-in">
          <button onClick={() => handleNav('#work')} className={navLinkMobile}>
            Work
          </button>
          <button onClick={() => handleNav('#about')} className={navLinkMobile}>
            About
          </button>
          <a href="https://blog.vstn.cloud" target="_blank" rel="noopener noreferrer" className={navLinkMobile} onClick={() => setMenuOpen(false)}>
            Logs
          </a>
          <a href="/contact" className="font-mono text-sm tracking-[0.3em] uppercase px-6 py-3 border border-terminal-cyan/50 text-terminal-cyan hover:bg-terminal-cyan/10 transition-colors mt-4" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;