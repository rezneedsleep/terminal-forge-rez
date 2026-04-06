import { Wifi, Shield, Radio, Cpu, HardDrive, Monitor } from 'lucide-react';

const MarauderSection = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="font-mono text-xs text-terminal-dim mb-4 flex items-center gap-2">
          <span className="text-terminal-green">$</span> cat featured_project.md
        </div>

        <div className="border border-border rounded-lg bg-card p-6 md:p-10 border-glow-cyan relative overflow-hidden">
          {/* Corner accents */}
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

          {/* Capabilities grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Wifi, label: '802.11 Frame Analysis', desc: 'Beacon, probe, and deauth frame capture and injection' },
              { icon: Shield, label: 'PMKID Harvesting', desc: 'WPA/WPA2 handshake-less key material extraction' },
              { icon: Radio, label: 'BLE Sniffing', desc: 'Bluetooth Low Energy device discovery and enumeration' },
              { icon: Cpu, label: 'ESP32 Dual-Core', desc: 'Xtensa LX6 @ 240MHz with Wi-Fi and BLE radios' },
              { icon: Monitor, label: 'TFT Display', desc: 'Real-time packet visualization and menu navigation' },
              { icon: HardDrive, label: 'SD Card Logging', desc: 'Persistent capture storage for post-analysis' },
            ].map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="p-4 border border-border rounded-md bg-background hover:border-terminal-cyan/30 transition-colors"
              >
                <Icon size={18} className="text-terminal-cyan mb-2" />
                <h3 className="font-mono text-sm font-semibold text-foreground mb-1">{label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="border-t border-border pt-4">
            <p className="font-mono text-xs text-terminal-dim leading-relaxed">
              <span className="text-terminal-green mr-2">⚠</span>
              Developed for educational and ethical security auditing purposes.
              Unauthorized network access is illegal. Always obtain explicit authorization before testing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarauderSection;
