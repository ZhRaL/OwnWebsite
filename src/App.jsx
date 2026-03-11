import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import './App.css';
import Aboutme from './Components/Aboutme';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Impressum from './Components/Impressum';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills';
import Technologies from './Components/Technologies/Technologies';

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location?.state?.scrollTo) {
      const id = location.state.scrollTo;
      window.setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );
      }, 80);
      return;
    }

    if (location.hash) {
      const id = location.hash.replace('#', '');
      window.setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location]);

  return null;
}

function HomePage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="page-content">
        <section id="home" className="hero-section section-shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="section-kicker">
                Fullstack-Entwicklung mit Fokus auf .NET und React
              </span>
              <h1>
                Technische Umsetzung mit Substanz, Klarheit und hohem
                Qualitätsanspruch.
              </h1>
              <p className="hero-lead">
                Ich entwickle moderne Webanwendungen und belastbare
                Softwarelösungen mit starkem Backend-Fokus, sauberer Struktur
                und einem klaren Blick für Business-Anforderungen, Wartbarkeit
                und nachhaltige Weiterentwicklung.
              </p>
              <div className="hero-points">
                <span>
                  Strukturierte Umsetzung statt kurzfristiger Workarounds
                </span>
                <span>
                  Offene Kommunikation, Transparenz und verlässliche
                  Zusammenarbeit
                </span>
                <span>Technische Tiefe in Entwicklung und IT-Sicherheit</span>
                <span>
                  Saubere, wartbare Lösungen mit Blick auf Performance und
                  Skalierbarkeit
                </span>
              </div>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Kontakt aufnehmen
                </a>
                <a className="button button-secondary" href="#projects">
                  Schwerpunkte ansehen
                </a>
              </div>
            </div>
            <aside className="hero-panel">
              <div className="hero-panel-card">
                <span className="eyebrow">Positionierung</span>

                <p>
                  Fullstack-Entwickler mit Schwerpunkt Backend. Erfahrung in
                  Softwareentwicklung, Cyber-Sicherheit und technischer
                  Produktumsetzung.
                </p>
              </div>
              <div className="hero-metrics">
                <div className="metric-card">
                  <strong>8 Jahre</strong>
                  <span>.NET und C# in der Praxis</span>
                </div>
                <div className="metric-card">
                  <strong>5 Jahre</strong>
                  <span>Unity-Erfahrung bis 2025</span>
                </div>
                <div className="metric-card">
                  <strong>M.Sc.</strong>
                  <span>Cyber-Sicherheit, Abschluss 2023</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <Aboutme />
        <Skills />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <section className="legal-strip section-shell">
        <div className="legal-strip__inner">
          <span>© {new Date().getFullYear()} Sebastian Albert</span>
          <Link to="/impressum">Impressum</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function LegalPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="page-content">
        <section className="section-shell legal-page">
          <Impressum />
        </section>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<LegalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
