import { Droplets, Wind } from 'lucide-react';

const projects = [
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
];

const ProjectsSection = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto"> 
        {/* Prompt Terminal - Ukuran sama dengan Hero, tanpa icon terminal */}
        <div className="flex items-center gap-2 mb-6 text-terminal-dim font-mono text-sm">
          <span className="text-terminal-green">$</span>
          <span className="text-terminal-green">cat</span>
          <span>featured_project.md</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-10">
          Engineering Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="border border-border rounded-lg bg-card p-6 hover:border-terminal-green/20 transition-colors"
            >
              <proj.icon size={20} className="text-terminal-green mb-3" />
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
                    className="font-mono text-xs px-2 py-1 border border-border rounded-sm text-terminal-dim"
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
};

export default ProjectsSection;
