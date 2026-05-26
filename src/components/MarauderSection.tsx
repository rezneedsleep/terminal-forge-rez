import { Wifi, Shield, Radio, Cpu, HardDrive, Monitor, Bluetooth, Zap, Link, BarChart2, Trash2, Activity, DollarSign, Scale, CheckSquare, Sparkles } from 'lucide-react';

const FeaturedProjectsSection = () => {
  return (
    <section className="px-6 py-24 scroll-mt-20 section-animate">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-6 text-terminal-dim font-mono text-sm">
          <span className="text-terminal-green">$</span>
          <span className="text-terminal-green">cat</span>
          <span>featured_project.md</span>
        </div>

        {/* ESP32 Marauder */}
        <div className="border border-border rounded-lg bg-card p-6 md:p-10 border-glow-cyan relative overflow-hidden mb-6">
          <div className="absolute top-0 left-0 w-16 h-px bg-terminal-cyan/40" />
          <div className="absolute top-0 left-0 h-16 w-px bg-terminal-cyan/40" />
          <div className="absolute bottom-0 right-0 w-16 h-px bg-terminal-cyan/40" />
          <div className="absolute bottom-0 right-0 h-16 w-px bg-terminal-cyan/40" />

          <div className="flex items-center gap-3 mb-6">
            <Radio className="text-terminal-cyan" size={24} />
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground">
              ESP32 Marauder
            </h2>
          </div>

          <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-8 max-w-3xl">
            A comprehensive wireless auditing platform built on the ESP32 microcontroller.
            Capable of 802.11 frame manipulation, PMKID capture, deauthentication detection,
            and BLE device enumeration — all from a handheld, battery-powered unit.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Wifi, label: '802.11 Frame Analysis', desc: 'Beacon, probe, and deauth frame capture and injection' },
              { icon: Shield, label: 'PMKID Harvesting', desc: 'WPA/WPA2 handshake-less key material extraction' },
              { icon: Radio, label: 'BLE Sniffing', desc: 'Bluetooth Low Energy device discovery and enumeration' },
              { icon: Cpu, label: 'ESP32 Dual-Core', desc: 'Xtensa LX6 @ 240MHz with Wi-Fi and BLE radios' },
              { icon: Monitor, label: 'TFT Display', desc: 'Real-time packet visualization and menu navigation' },
              { icon: HardDrive, label: 'SD Card Logging', desc: 'Persistent capture storage for post-analysis' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="p-4 border border-border rounded-md bg-background hover:border-terminal-cyan/30 transition-colors">
                <Icon size={18} className="text-terminal-cyan mb-2" />
                <h3 className="font-mono text-sm font-semibold text-foreground mb-1">{label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-4">
            <p className="font-mono text-xs text-terminal-dim leading-relaxed">
              <span className="text-terminal-green mr-2">{'\u26A0'}</span>
              Developed for educational and ethical security auditing purposes.
              Unauthorized network access is illegal. Always obtain explicit authorization before testing.
            </p>
          </div>
        </div>

        {/* ESP32 Blue Jammer */}
        <div className="border border-border rounded-lg bg-card p-6 md:p-10 relative overflow-hidden mb-6" style={{ boxShadow: '0 0 15px hsl(155 100% 50% / 0.1), inset 0 0 15px hsl(155 100% 50% / 0.03)' }}>
          <div className="absolute top-0 left-0 w-16 h-px bg-terminal-green/40" />
          <div className="absolute top-0 left-0 h-16 w-px bg-terminal-green/40" />
          <div className="absolute bottom-0 right-0 w-16 h-px bg-terminal-green/40" />
          <div className="absolute bottom-0 right-0 h-16 w-px bg-terminal-green/40" />

          <div className="flex items-center gap-3 mb-6">
            <Bluetooth className="text-terminal-green" size={24} />
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground">
              ESP32 Blue Jammer
            </h2>
          </div>

          <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-8 max-w-3xl">
            Bluetooth signal disruption tool built on the ESP32 platform. Targets BLE and Classic Bluetooth
            channels for controlled interference testing in authorized RF environments.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Bluetooth, label: 'BLE Channel Flooding', desc: 'Targeted disruption across 40 BLE advertising channels' },
              { icon: Zap, label: 'Classic BT Interference', desc: 'Frequency hopping disruption on 79 Bluetooth channels' },
              { icon: Cpu, label: 'ESP32 BLE Stack', desc: 'Native Bluetooth 4.2 + BLE radio with full stack control' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="p-4 border border-border rounded-md bg-background hover:border-terminal-green/30 transition-colors">
                <Icon size={18} className="text-terminal-green mb-2" />
                <h3 className="font-mono text-sm font-semibold text-foreground mb-1">{label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-4">
            <p className="font-mono text-xs text-terminal-dim leading-relaxed">
              <span className="text-terminal-green mr-2">{'\u26A0'}</span>
              For authorized RF testing only. Bluetooth signal disruption may violate local regulations.
              Ensure compliance with applicable laws before operation.
            </p>
          </div>
        </div>

        {/* URL Shortener */}
        <div className="border border-border rounded-lg bg-card p-6 md:p-10 relative overflow-hidden mb-6" style={{ boxShadow: '0 0 15px hsl(230 60% 60% / 0.1), inset 0 0 15px hsl(230 60% 60% / 0.03)' }}>
          <div className="absolute top-0 left-0 w-16 h-px bg-[#7986cb]/40" />
          <div className="absolute top-0 left-0 h-16 w-px bg-[#7986cb]/40" />
          <div className="absolute bottom-0 right-0 w-16 h-px bg-[#7986cb]/40" />
          <div className="absolute bottom-0 right-0 h-16 w-px bg-[#7986cb]/40" />

          <div className="flex items-center gap-3 mb-6">
            <Link className="text-[#7986cb]" size={24} />
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground">
              URL Shortener
            </h2>
          </div>

          <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-8 max-w-3xl">
            A full-stack URL shortening service built with React, Supabase, and deployed on Vercel.
            Supports custom aliases, click analytics with charts, and real-time link management —
            accessible at{' '}
            <a href="https://url.vstn.cloud" target="_blank" rel="noreferrer" className="text-[#7986cb] hover:underline">
              url.vstn.cloud
            </a>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Link, label: 'Custom Alias', desc: 'Choose your own short code instead of a random one' },
              { icon: BarChart2, label: 'Click Analytics', desc: 'Track clicks per day with interactive bar charts' },
              { icon: Trash2, label: 'Link Management', desc: 'Create, copy, and delete links from a clean dashboard' },
              { icon: Zap, label: 'Supabase Backend', desc: 'PostgreSQL database with real-time capabilities' },
              { icon: Monitor, label: 'React + Vite', desc: 'Fast frontend with dark mode UI and smooth UX' },
              { icon: Shield, label: 'Vercel Deployment', desc: 'Globally distributed with automatic CI/CD from GitHub' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="p-4 border border-border rounded-md bg-background hover:border-[#7986cb]/30 transition-colors">
                <Icon size={18} className="text-[#7986cb] mb-2" />
                <h3 className="font-mono text-sm font-semibold text-foreground mb-1">{label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-4 flex items-center justify-between flex-wrap gap-3">
            <p className="font-mono text-xs text-terminal-dim">
              <span className="text-[#7986cb] mr-2">{'\u2192'}</span>
              Stack: React · Supabase · Vercel · PostgreSQL
            </p>
            <a
              href="https://url.vstn.cloud"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs px-4 py-2 border border-[#7986cb]/40 text-[#7986cb] rounded hover:bg-[#7986cb]/10 transition-colors"
            >
              Visit Project {'\u2192'}
            </a>
          </div>
        </div>

        {/* Personal Tracker */}
        <div className="border border-border rounded-lg bg-card p-6 md:p-10 relative overflow-hidden" style={{ boxShadow: '0 0 15px hsl(150 12% 59% / 0.1), inset 0 0 15px hsl(150 12% 59% / 0.03)' }}>
          <div className="absolute top-0 left-0 w-16 h-px bg-[#8da399]/40" />
          <div className="absolute top-0 left-0 h-16 w-px bg-[#8da399]/40" />
          <div className="absolute bottom-0 right-0 w-16 h-px bg-[#8da399]/40" />
          <div className="absolute bottom-0 right-0 h-16 w-px bg-[#8da399]/40" />

          <div className="flex items-center gap-3 mb-6">
            <Activity className="text-[#8da399]" size={24} />
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground">
              Personal Tracker
            </h2>
          </div>

          <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-8 max-w-3xl">
            A personal dashboard for tracking expenses, habits, and weight, designed with a beautiful
            sage-themed UI. Supports clean data logging, interactive progress charts, and routine building —
            accessible at{' '}
            <a href="https://tracker.vstn.cloud" target="_blank" rel="noreferrer" className="text-[#8da399] hover:underline">
              tracker.vstn.cloud
            </a>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: DollarSign, label: 'Expense Tracking', desc: 'Monitor daily expenditures, categorize transactions, and control monthly budgets' },
              { icon: CheckSquare, label: 'Habit Builder', desc: 'Establish productive routines, track daily completions, and build consistency streaks' },
              { icon: Scale, label: 'Weight Logs', desc: 'Record weight changes, track long-term progress, and view automated target trends' },
              { icon: Sparkles, label: 'Sage Aesthetic', desc: 'A meticulously designed sage green visual interface tailored for low digital fatigue' },
              { icon: BarChart2, label: 'Interactive Charts', desc: 'Real-time visual data analysis and progress charts with clean UI components' },
              { icon: Monitor, label: 'Responsive Design', desc: 'Fully optimized for smooth cross-device tracking across both desktop and mobile screens' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="p-4 border border-border rounded-md bg-background hover:border-[#8da399]/30 transition-colors">
                <Icon size={18} className="text-[#8da399] mb-2" />
                <h3 className="font-mono text-sm font-semibold text-foreground mb-1">{label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-4 flex items-center justify-between flex-wrap gap-3">
            <p className="font-mono text-xs text-terminal-dim">
              <span className="text-[#8da399] mr-2">{'\u2192'}</span>
              Stack: React · Vite · Tailwind CSS · Local Storage
            </p>
            <a
              href="https://tracker.vstn.cloud"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs px-4 py-2 border border-[#8da399]/40 text-[#8da399] rounded hover:bg-[#8da399]/10 transition-colors"
            >
              Visit Project {'\u2192'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjectsSection;