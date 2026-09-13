import React, { useState, useEffect } from 'react';
import { Home, User, FolderGit2, Code2 } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  targetId: string;
}

interface FloatingNavProps {
  activeSection?: string;
  onNavigate?: (id: string) => void;
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: <Home size={15} />, targetId: 'home' },
  { id: 'about', label: 'About', icon: <User size={15} />, targetId: 'about' },
  { id: 'projects', label: 'Projects', icon: <FolderGit2 size={15} />, targetId: 'projects' },
  { id: 'services', label: 'Services', icon: <Code2 size={15} />, targetId: 'services' },
];

const FloatingNav: React.FC<FloatingNavProps> = ({ 
  activeSection = 'home',
  onNavigate 
}) => {
  const [active, setActive] = useState<string>(activeSection);

  useEffect(() => {
    if (activeSection) {
      setActive(activeSection);
    }
  }, [activeSection]);

  // Scrollspy to auto-detect section in view
  useEffect(() => {
    const handleScroll = () => {
      // Near top of page, active is always 'home'
      if (window.scrollY < 100) {
        setActive('home');
        return;
      }

      const scrollPosition = window.scrollY + 220;
      const trackedSections = [
        { id: 'services', targetId: 'services' },
        { id: 'projects', targetId: 'projects' },
        { id: 'about', targetId: 'about' },
      ];

      for (const section of trackedSections) {
        const el = document.getElementById(section.targetId);
        if (el && scrollPosition >= el.offsetTop) {
          setActive(section.id);
          return;
        }
      }

      setActive('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (item: NavItem) => {
    setActive(item.id);
    if (onNavigate) {
      onNavigate(item.id);
    }
    const target = document.getElementById(item.targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-[max(0.75rem,env(safe-area-inset-top,0.75rem))] sm:top-5 left-1/2 -translate-x-1/2 z-50 select-none max-w-[calc(100vw-1.5rem)]">
      <nav 
        aria-label="Main Navigation"
        className="flex items-center gap-1 sm:gap-2 p-1.5 rounded-full bg-[#111115]/90 backdrop-blur-xl border border-zinc-800/90 shadow-[0_12px_40px_rgba(0,0,0,0.8)] pill-nav-container overflow-x-auto no-scrollbar"
      >
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item)}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer outline-none shrink-0 touch-manipulation active:scale-95 ${
                isActive
                  ? 'bg-white text-zinc-950 font-semibold shadow-md scale-100'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              <span className={isActive ? 'text-zinc-950' : 'text-zinc-400'}>
                {item.icon}
              </span>
              <span className={`${isActive ? 'inline' : 'hidden sm:inline'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default FloatingNav;
