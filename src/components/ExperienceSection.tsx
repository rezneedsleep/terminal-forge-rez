import { Droplets, Wind, Building2, Zap } from 'lucide-react';

const ExperienceSection = () => (
  <section id="work" className="px-4 sm:px-6 py-24 scroll-mt-20 section-animate">
    <div className="max-w-5xl mx-auto"> 
        {/* Prompt Terminal - Ukuran sama dengan Hero, tanpa icon terminal */}
        <div className="flex items-center gap-2 mb-6 text-terminal-dim font-mono text-sm">
          <span className="text-terminal-green">$</span>
          <span className="text-terminal-green">cat</span>
          <span>experience.log</span>
        </div>

      <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-10">
        Experience
      </h2>

  <a href="https://bytenodes.icu" target="_blank" rel="noopener noreferrer" className="border border-border rounded-lg bg-card p-6 md:p-8 mb-10 hover:border-terminal-cyan/20 transition-all duration-300 group block">
  <div className="flex items-start gap-4">
    <Building2 size={22} className="text-terminal-cyan mt-1 shrink-0 group-hover:scale-110 transition-transform" />
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
        <h3 className="font-mono text-base sm:text-lg font-bold text-foreground">
          Chief Technology Officer
        </h3>
        <span className="font-mono text-xs text-terminal-dim">2025 — Present</span>
      </div>
      <p className="font-mono text-sm text-terminal-cyan mb-3">Bytenodes</p>
      <p className="text-muted-foreground text-sm leading-relaxed">
        Leading technical strategy, infrastructure architecture, and engineering operations.
        Overseeing server virtualization, network security, and embedded systems development.
      </p>
    </div>
  </div>
</a>

      {/* Projects sub-section */}
      <h3 className="font-mono text-lg font-semibold text-foreground mb-6">
        Engineering Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            icon: Droplets,
            title: 'Water Level Detection System',
            desc: 'Ultrasonic sensor array (HC-SR04) with I2C LCD output for real-time fluid level monitoring. Designed for industrial tank environments.',
            tags: ['Arduino', 'HC-SR04', 'I2C'],
          },
          {
            icon: Wind,
            title: 'Wind Turbine Simulator',
            desc: 'Embedded control system simulating turbine blade pitch and yaw dynamics. Sensor-driven feedback loop with real-time data logging.',
            tags: ['ESP32', 'Sensors', 'PWM'],
          },
          {
            icon: Zap,
            title: 'Wemos D1 Mini Deauth & Evil Twin',
            desc: 'ESP8266-based wireless security tool performing 802.11 deauthentication attacks and evil twin access point deployment for network auditing.',
            tags: ['ESP8266', 'Wi-Fi', 'Deauth'],
          },
        ].map((proj) => (
          <div
            key={proj.title}
            className="border border-border rounded-lg bg-card p-6 hover:border-terminal-green/20 hover:bg-white/[0.02] transition-all group"
          >
            <proj.icon size={20} className="text-terminal-green mb-3 group-hover:rotate-12 transition-transform" />
            <h3 className="font-mono text-base font-semibold text-foreground mb-2">
              {proj.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {proj.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2 py-1 border border-border rounded-sm text-terminal-dim group-hover:text-terminal-green group-hover:border-terminal-green/30 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;