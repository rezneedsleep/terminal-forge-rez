import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

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
      { text: '┌──────────────────────────────────────────┐', color: 'text-terminal-cyan' },
      { text: '│  IDENTITY CARD                           │', color: 'text-terminal-cyan' },
      { text: '├──────────────────────────────────────────┤', color: 'text-terminal-cyan' },
      { text: '│  Name      : Rezky (rez)               │', color: 'text-foreground' },
      { text: '│  Role      : Chief Technology Officer     │', color: 'text-foreground' },
      { text: '│  Org       : Bytenodes                   │', color: 'text-foreground' },
      { text: '│  Domain    : vstn.cloud                  │', color: 'text-foreground' },
      { text: '│  Focus     : Infrastructure & Embedded   │', color: 'text-foreground' },
      { text: '│  Location  : Indonesia 🇮🇩                │', color: 'text-foreground' },
      { text: '└──────────────────────────────────────────┘', color: 'text-terminal-cyan' },
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
      { text: '── CONTACT ──', color: 'text-terminal-cyan' },
      { text: '' },
      { text: '  Email     : zyxienn@vstn.cloud', color: 'text-foreground' },
      { text: '  GitHub    : github.com/rezneedsleep', color: 'text-foreground' },
      { text: '  Instagram : @rez.css', color: 'text-foreground' },
      { text: '  Discord   : rez (864702111542673428)', color: 'text-foreground' },
      { text: '' },
      { text: '  Available for freelance & consulting.', color: 'text-terminal-dim' },
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
    <section className="px-4 sm:px-6 py-24 scroll-mt-20 section-animate">
      <div className="max-w-5xl mx-auto">
        {/* Section prompt */}
        <div className="flex items-center gap-2 mb-6 text-terminal-dim font-mono text-sm">
          <span className="text-terminal-green">$</span>
          <span className="text-terminal-green">./</span>
          <span>interactive_shell.sh</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-6">
          Terminal
        </h2>
        <p className="text-muted-foreground font-mono text-sm mb-8 max-w-xl">
          Try running some commands — just like a real shell.
        </p>

        {/* Terminal window */}
        <div className="border border-border rounded-lg overflow-hidden bg-[hsl(0,0%,5%)]">
          {/* Title bar */}
          <div className="flex items-center gap-3 px-4 py-2.5 border-b border-border bg-black/50">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="flex items-center gap-1.5">
              <TerminalIcon size={12} className="text-terminal-dim" />
              <span className="font-mono text-[11px] text-terminal-dim tracking-wider">
                rez@vstn:~
              </span>
            </div>
          </div>

          {/* Output area */}
          <div
            ref={scrollRef}
            className="p-4 sm:p-6 h-[400px] sm:h-[500px] overflow-y-auto font-mono text-xs sm:text-sm leading-relaxed space-y-4 scroll-smooth"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((entry, i) => (
              <div key={i}>
                {/* Show prompt + command for non-initial entries */}
                {entry.input && (
                  <div className="flex items-center gap-2 text-terminal-dim mb-1">
                    <span className="text-terminal-green">rez@vstn:~$</span>
                    <span className="text-foreground">{entry.input}</span>
                  </div>
                )}
                {/* Output lines */}
                {entry.output.map((line, j) => (
                  <div key={j} className={line.color || 'text-foreground'}>
                    {line.text || '\u00A0'}
                  </div>
                ))}
              </div>
            ))}

            {/* Active prompt */}
            <div className="flex items-center gap-2">
              <span className="text-terminal-green whitespace-nowrap">rez@vstn:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-foreground font-mono caret-terminal-cyan"
                spellCheck={false}
                autoComplete="off"
                autoCapitalize="off"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTerminal;
