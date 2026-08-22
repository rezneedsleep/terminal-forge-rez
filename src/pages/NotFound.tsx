import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Terminal, ArrowLeft } from "lucide-react";

const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
const randomChar = () => glitchChars[Math.floor(Math.random() * glitchChars.length)];

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [glitch, setGlitch] = useState('404');
  const [typed, setTyped] = useState('');
  const fullError = `Error: route "${location.pathname}" not found in filesystem.`;

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Glitch effect on 404
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(
        '404'.split('').map((ch, i) =>
          Math.random() > 0.7 ? randomChar() : ch
        ).join('')
      );
    }, 100);

    // Stop glitch after 2s
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setGlitch('404');
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  // Typewriter for error message
  useEffect(() => {
    if (typed.length < fullError.length) {
      const timeout = setTimeout(() => {
        setTyped(fullError.slice(0, typed.length + 1));
      }, 25);
      return () => clearTimeout(timeout);
    }
  }, [typed, fullError]);

  return (
    <div className="min-h-screen bg-background scanlines grid-pattern flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-terminal-cyan/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-lg w-full text-center relative z-10">
        {/* Terminal prompt */}
        <div className="flex items-center justify-center gap-2 mb-8 text-terminal-dim font-mono text-sm">
          <Terminal size={16} />
          <span>rez@vstn:~$</span>
          <span className="text-terminal-green">cd</span>
          <span className="text-red-400">{location.pathname}</span>
        </div>

        {/* Glitchy 404 */}
        <h1 className="text-7xl sm:text-9xl font-mono font-bold text-terminal-cyan glow-cyan mb-4 tracking-wider select-none">
          {glitch}
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-lg sm:text-xl text-foreground mb-4">
          Segmentation Fault
        </p>

        {/* Error message typewriter */}
        <div className="inline-block text-left bg-card border border-border rounded-lg p-4 mb-8 w-full">
          <div className="flex items-center gap-1.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <span className="w-2 h-2 rounded-full bg-green-500/70" />
          </div>
          <p className="font-mono text-xs sm:text-sm text-red-400 leading-relaxed">
            {typed}
            {typed.length < fullError.length && (
              <span className="inline-block w-1.5 h-3.5 bg-terminal-cyan cursor-blink ml-0.5 align-middle" />
            )}
          </p>
          {typed.length >= fullError.length && (
            <p className="font-mono text-xs text-terminal-dim mt-2 animate-[fadeIn_0.5s_ease]">
              Process exited with code 1. Try navigating back to home.
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center gap-2 font-mono text-sm px-6 py-3 border border-terminal-cyan/50 text-terminal-cyan rounded hover:bg-terminal-cyan/10 transition-colors"
          >
            <ArrowLeft size={14} />
            cd /home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 font-mono text-sm px-6 py-3 border border-border text-terminal-dim rounded hover:border-terminal-dim/50 hover:text-foreground transition-colors"
          >
            Go Back
          </button>
        </div>

        {/* Decoration */}
        <div className="mt-12 font-mono text-[10px] text-terminal-dim/40 space-y-1">
          <p>core dumped at 0x{Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}</p>
          <p>stack trace: main() → router() → resolve("{location.pathname}") → SIGFAULT</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
