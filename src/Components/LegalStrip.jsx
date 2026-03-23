import { Link } from 'react-router-dom';

const LegalStrip = () => {
  return (
    <section className="legal-strip section-shell">
      <div className="legal-strip__inner">
        <span>© {new Date().getFullYear()} Sebastian Albert</span>
        <nav className="legal-strip__links" aria-label="Rechtliche Links">
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutzerklärung</Link>
        </nav>
      </div>
    </section>
  );
};

export default LegalStrip;
