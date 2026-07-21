export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="reveal">
          <div className="status"><span className="status-dot" />Toronto-based and open to new engineering opportunities</div>
          <h1>Cloud systems.<br />Reliable delivery.<br /><span className="gradient-text">Practical software.</span></h1>
          <p className="hero-copy">I&apos;m Enesi Jatto, an IT Technical Specialist focused on cloud infrastructure, DevOps automation, and backend engineering with AWS, Azure, Terraform, Kubernetes, Java, and Python.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View my projects</a>
            <a className="button button-secondary" href="https://github.com/MJatto" target="_blank" rel="noreferrer">GitHub</a>
            <a className="button button-secondary" href="https://www.linkedin.com/in/enesi-jatto-08418780/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className="stats-grid">
            <div className="card stat"><strong>3+ years</strong><span>Enterprise IT experience</span></div>
            <div className="card stat"><strong>Cloud + code</strong><span>Infrastructure and backend focus</span></div>
            <div className="card stat"><strong>Toronto, ON</strong><span>Hybrid and remote opportunities</span></div>
          </div>
        </div>
        <aside className="card hero-panel reveal">
          <div className="terminal">
            <div className="terminal-top"><span className="terminal-dot" /><span className="terminal-dot" /><span className="terminal-dot" /></div>
            <div className="terminal-body">
              <div><span className="code-muted">$</span> <span className="code-blue">whoami</span></div><div className="code-green">Enesi Jatto</div><br />
              <div><span className="code-muted">$</span> <span className="code-blue">cat</span> focus.txt</div><div>Cloud Engineering</div><div>DevOps Automation</div><div>Backend Development</div><br />
              <div><span className="code-muted">$</span> <span className="code-blue">ls</span> stack/</div><div className="code-cyan">aws azure terraform docker kubernetes</div><div className="code-cyan">jenkins ansible java python powershell</div><br />
              <div><span className="code-muted">$</span> <span className="code-blue">echo</span> &quot;Build. Automate. Improve.&quot;</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
