import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import TextScramble from '@/components/TextScramble';

/* ── command definitions ──────────────────────────────────── */
interface OutputLine {
  text: string;
  color?: string;
}

const COMMANDS: Record<string, { desc: string; run: () => OutputLine[] }> = {
  help: {
    desc: 'List available commands',
    run: () => [
      { text: 'Available commands:', color: 'text-terminal-cyan' },
      { text: '' },
      ...Object.entries(COMMANDS).map(([cmd, { desc }]) => ({
        text: `  ${cmd.padEnd(12)} — ${desc}`,
        color: 'text-foreground',
      })),
      { text: '' },
      { text: 'Tip: type a command and press Enter.', color: 'text-terminal-dim' },
    ],
  },

  identity: {
    desc: 'Display user identity',
    run: () => [
      { text: '┌────────────────────────────────────┐', color: 'text-zinc-400' },
      { text: '│  IDENTITY CARD                     │', color: 'text-zinc-200' },
      { text: '├────────────────────────────────────┤', color: 'text-zinc-400' },
      { text: '│  Name     : Rezky (rez)            │', color: 'text-zinc-300' },
      { text: '│  Domain   : vstn.cloud             │', color: 'text-zinc-300' },
      { text: '│  Focus    : Infra & Embedded       │', color: 'text-zinc-300' },
      { text: '│  Location : Indonesia 🇮🇩           │', color: 'text-zinc-300' },
      { text: '└────────────────────────────────────┘', color: 'text-zinc-400' },
    ],
  },

  status: {
    desc: 'Show system status',
    run: () => {
      const uptime = Math.floor(Math.random() * 90 + 10);
      return [
        { text: '── SYSTEM STATUS ──', color: 'text-terminal-cyan' },
        { text: '' },
        { text: `  Uptime       : ${uptime} days`, color: 'text-foreground' },
        { text: '  Website      : ● Online', color: 'text-terminal-green' },
        { text: '  Blog         : ● Online (blog.vstn.cloud)', color: 'text-terminal-green' },
        { text: '  Tracker      : ● Online (tracker.vstn.cloud)', color: 'text-terminal-green' },
        { text: '  Proxmox      : ● Running (3 VMs, 2 LXC)', color: 'text-terminal-green' },
        { text: '  Docker       : ● 7 containers active', color: 'text-terminal-green' },
        { text: `  Memory       : ${Math.floor(Math.random() * 20 + 60)}% used`, color: 'text-foreground' },
        { text: `  CPU Load     : ${(Math.random() * 2 + 0.5).toFixed(2)}`, color: 'text-foreground' },
        { text: '' },
        { text: '  All systems operational.', color: 'text-terminal-dim' },
      ];
    },
  },

  skills: {
    desc: 'List technical skills',
    run: () => [
      { text: '── TECHNICAL STACK ──', color: 'text-terminal-cyan' },
      { text: '' },
      { text: '  [Cloud]       Proxmox VE · Docker · AWS', color: 'text-foreground' },
      { text: '  [Network]     Cloudflare · VLAN · MikroTik', color: 'text-foreground' },
      { text: '  [Database]    MySQL · InnoDB · ZFS/LVM', color: 'text-foreground' },
      { text: '  [Backend]     Node.js · Python · Linux/Bash', color: 'text-foreground' },
      { text: '  [Frontend]    React · Vite · Typescript', color: 'text-foreground' },
      { text: '  [Security]    WireGuard · iptables · Nginx PM', color: 'text-foreground' },
      { text: '  [Embedded]    ESP32 · Arduino · ESP8266', color: 'text-foreground' },
    ],
  },

  projects: {
    desc: 'List featured projects',
    run: () => [
      { text: '── FEATURED PROJECTS ──', color: 'text-terminal-cyan' },
      { text: '' },
      { text: '  01  ESP32 Marauder        Wireless auditing platform', color: 'text-foreground' },
      { text: '      → 802.11 frame analysis, PMKID, BLE sniffing', color: 'text-terminal-dim' },
      { text: '' },
      { text: '  02  ESP32 Blue Jammer     Bluetooth RF testing', color: 'text-foreground' },
      { text: '      → BLE channel flooding, classic BT interference', color: 'text-terminal-dim' },
      { text: '' },
      { text: '  03  Personal Tracker      tracker.vstn.cloud', color: 'text-foreground' },
      { text: '      → Expense, habits, weight tracking dashboard', color: 'text-terminal-dim' },
      { text: '' },
      { text: '  04  EduTrack              edutrack.davinn.net', color: 'text-foreground' },
      { text: '      → Academic schedule & grade management', color: 'text-terminal-dim' },
    ],
  },

  contact: {
    desc: 'Show contact info',
    run: () => [
      { text: '── CONTACT & TRANSMISSION ──', color: 'text-zinc-200' },
      { text: '' },
      { text: '  Email     : zyxienn21@gmail.com', color: 'text-zinc-100' },
      { text: '  WhatsApp  : +62 8•• •••• •••• (Direct Relay)', color: 'text-zinc-300' },
      { text: '' },
      { text: '  Available for freelance, systems & consulting.', color: 'text-zinc-500' },
    ],
  },


  clear: {
    desc: 'Clear terminal',
    run: () => [],
  },
};

/* ── terminal component ───────────────────────────────────── */
const InteractiveTerminal = () => {
  const [history, setHistory] = useState<{ input: string; output: OutputLine[] }[]>([
    {
      input: '',
      output: [
        { text: 'Welcome to rez terminal v1.0.0', color: 'text-terminal-cyan' },
        { text: 'Type "help" to see available commands.', color: 'text-terminal-dim' },
        { text: '' },
      ],
    },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();

    if (!cmd) return;

    setCmdHistory((prev) => [...prev, cmd]);
    setHistoryIdx(-1);

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    const handler = COMMANDS[cmd];
    if (handler) {
      setHistory((prev) => [...prev, { input: cmd, output: handler.run() }]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          input: cmd,
          output: [
            { text: `bash: ${cmd}: command not found`, color: 'text-red-400' },
            { text: 'Type "help" for available commands.', color: 'text-terminal-dim' },
          ],
        },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      runCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const newIdx = historyIdx < cmdHistory.length - 1 ? historyIdx + 1 : historyIdx;
      setHistoryIdx(newIdx);
      setInput(cmdHistory[cmdHistory.length - 1 - newIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx <= 0) {
        setHistoryIdx(-1);
        setInput('');
      } else {
        const newIdx = historyIdx - 1;
        setHistoryIdx(newIdx);
        setInput(cmdHistory[cmdHistory.length - 1 - newIdx]);
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  return (
    <section id="terminal" className="w-full py-2 scroll-mt-14">
      <div className="w-full">
        {/* Section prompt */}
        <div className="flex items-center justify-between gap-2 mb-3 text-zinc-500 font-mono text-xs select-none">
          <div className="flex items-center gap-2">
            <span className="text-zinc-300">$</span>
            <span className="text-zinc-200">./</span>
            <span className="text-zinc-400">
              <TextScramble text="interactive_shell.sh" />
            </span>
            <span className="cursor-block text-zinc-500 text-[9px]" />
          </div>
          <span className="text-[10px] text-zinc-600 tracking-wider">[HOTKEY: T]</span>
        </div>

        <div className="text-[11px] font-bold tracking-[0.2em] text-zinc-300 uppercase mb-2 flex items-center gap-2 select-none">
          <span>TERMINAL SHELL</span>
          <span className="h-px bg-zinc-800 flex-1" />
        </div>

        {/* Terminal window with ASCII Corners */}
        <div className="border border-[#27272a] bg-[#0c0c0f] shadow-lg relative">
          {/* Corner ASCII brackets */}
          <span className="absolute top-1 left-1.5 font-mono text-[10px] text-zinc-600 select-none z-10">┌</span>
          <span className="absolute top-1 right-1.5 font-mono text-[10px] text-zinc-600 select-none z-10">┐</span>
          <span className="absolute bottom-1 left-1.5 font-mono text-[10px] text-zinc-600 select-none z-10">└</span>
          <span className="absolute bottom-1 right-1.5 font-mono text-[10px] text-zinc-600 select-none z-10">┘</span>

          {/* Title bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-[#222226] bg-[#121216] select-none pl-5">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a40]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a30]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#222227]" />
              </div>
              <div className="flex items-center gap-1.5 ml-1 sm:ml-2">
                <TerminalIcon size={12} className="text-zinc-400" />
                <span className="font-mono text-[10px] sm:text-[11px] text-zinc-300 tracking-wider">
                  rez@vstn:~ (sh)
                </span>
              </div>
            </div>

            <div className="hidden sm:block text-[10px] text-zinc-500 font-mono pr-4">
              TYPE &apos;help&apos; OR &apos;status&apos;
            </div>
          </div>

          {/* Quick command buttons for mobile tap-to-run */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0a0a0d] border-b border-[#1c1c20] overflow-x-auto whitespace-nowrap scrollbar-none touch-pan-x text-[10px] font-mono">
            <span className="text-zinc-500 select-none text-[9px] mr-1">QUICK:</span>
            {['help', 'status', 'projects', 'skills', 'identity', 'clear'].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => runCommand(c)}
                className="px-2 py-0.5 bg-[#141418] hover:bg-[#222228] active:bg-[#2c2c34] border border-[#27272e] text-zinc-300 hover:text-white rounded-none cursor-pointer transition-colors"
              >
                [{c}]
              </button>
            ))}
          </div>

          {/* Output area */}
          <div
            ref={scrollRef}
            className="p-3 sm:p-6 h-[320px] sm:h-[480px] overflow-y-auto font-mono text-xs sm:text-sm leading-relaxed space-y-3 scroll-smooth bg-[#08080a]"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((entry, i) => (
              <div key={i}>
                {/* Show prompt + command for non-initial entries */}
                {entry.input && (
                  <div className="flex items-center gap-2 text-zinc-500 mb-1">
                    <span className="text-zinc-300">rez@vstn:~$</span>
                    <span className="text-white font-semibold">{entry.input}</span>
                  </div>
                )}
                {/* Output lines */}
                {entry.output.map((line, j) => (
                  <div key={j} className={line.color || 'text-zinc-300'}>
                    {line.text || '\u00A0'}
                  </div>
                ))}
              </div>
            ))}

            {/* Active prompt */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-zinc-300 font-semibold whitespace-nowrap text-xs sm:text-sm shrink-0">rez@vstn:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 min-w-0 bg-transparent outline-none text-white font-mono caret-zinc-200 text-[16px] sm:text-xs"
                spellCheck={false}
                autoComplete="off"
                autoCapitalize="off"
                placeholder="type a command..."
              />
              <span className="cursor-block text-zinc-400 text-xs ml-0.5 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTerminal;
