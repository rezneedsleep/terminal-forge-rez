const FooterSection = () => (
  <footer className="px-6 py-12 border-t border-border section-animate">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-terminal-dim">
        © {new Date().getFullYear()} rez — Server Infrastructure & Embedded Systems
      </p>
      <p className="font-mono text-xs text-terminal-dim">
        <span className="text-terminal-green">●</span> All systems operational
      </p>
    </div>
  </footer>
);

export default FooterSection;