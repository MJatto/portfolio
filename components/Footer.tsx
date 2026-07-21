export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <span>© {new Date().getFullYear()} Enesi Jatto</span>
        <span>Built with Next.js and TypeScript.</span>
      </div>
    </footer>
  );
}
