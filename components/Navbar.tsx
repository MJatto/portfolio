const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
];

export default function Navbar() {
  return (
    <header className="nav-shell">
      <nav className="container nav" aria-label="Main navigation">
        <a className="brand" href="/#top" aria-label="Go to the top of the page">
          EJ<span className="gradient-text">.</span>
        </a>

        <div className="nav-links">
          {links.map(([label, href]) => (
            <a key={href} href={`/${href}`}>
              {label}
            </a>
          ))}
          <a
            href="/resume/Enesi_Jatto_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a className="nav-cta" href="/#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
