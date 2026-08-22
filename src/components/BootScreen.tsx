import { useState, useEffect, useCallback } from 'react';

interface BootLine {
  text: string;
  color?: string;
  delay: number;
}

const bootSequence: BootLine[] = [
  { text: 'BIOS v3.2.1 — Initializing system...', color: 'text-terminal-dim', delay: 0 },
  { text: '[  OK  ] Loading kernel modules', color: 'text-terminal-green', delay: 400 },
  { text: '[  OK  ] Mounting filesystems', color: 'text-terminal-green', delay: 800 },
  { text: '[  OK  ] Starting network interfaces', color: 'text-terminal-green', delay: 1200 },
  { text: '[  OK  ] Connecting to vstn.cloud', color: 'text-terminal-green', delay: 1700 },
  { text: '[  OK  ] Loading user profile: rez', color: 'text-terminal-green', delay: 2200 },
  { text: '[  OK  ] Initializing React runtime', color: 'text-terminal-green', delay: 2700 },
  { text: '[  OK  ] Rendering UI components', color: 'text-terminal-green', delay: 3200 },
  { text: '', delay: 3700 },
  { text: '> System ready. Welcome back, rez.', color: 'text-terminal-cyan', delay: 4000 },
];

const TOTAL_DURATION = 4500;

const BootScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const finish = useCallback(() => {
    setFadeOut(true);
    setTimeout(onComplete, 500);
  }, [onComplete]);

  // Boot lines
  useEffect(() => {
    const timers = bootSequence.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Progress bar
  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / TOTAL_DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(finish, 300);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [finish]);

  // Skip on click/key
  useEffect(() => {
    const skip = () => finish();
    // Delay skip so it doesn't fire from stale events during HMR / load
    const timer = setTimeout(() => {
      window.addEventListener('keydown', skip);
      window.addEventListener('click', skip);
    }, 500);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', skip);
      window.removeEventListener('click', skip);
    };
  }, [finish]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col justify-center px-6 sm:px-12 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="max-w-2xl mx-auto w-full">
        {/* Terminal header */}
        <div className="flex items-center gap-1.5 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-3 font-mono text-[11px] text-terminal-dim tracking-wider">
            rez@vstn:~
          </span>
        </div>

        {/* Boot lines */}
        <div className="font-mono text-xs sm:text-sm leading-relaxed space-y-1 mb-8 min-h-[280px]">
          {bootSequence.slice(0, visibleLines).map((line, i) => (
            <div key={i} className={`${line.color || 'text-foreground'} animate-[fadeIn_0.2s_ease]`}>
              {line.text || '\u00A0'}
            </div>
          ))}
          {visibleLines < bootSequence.length && (
            <span className="inline-block w-2 h-4 bg-terminal-cyan cursor-blink" />
          )}
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between font-mono text-[10px] text-terminal-dim">
            <span>LOADING</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-terminal-cyan rounded-full transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Skip hint */}
        <p className="mt-6 font-mono text-[10px] text-terminal-dim/50 text-center animate-pulse">
          Press any key or click to skip
        </p>
      </div>
    </div>
  );
};

export default BootScreen;
