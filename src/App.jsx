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
  const projectSituations = [
    {
      label: 'MVP',
      title: 'Eine Produktidee soll als MVP umgesetzt werden',
    },
    {
      label: 'Backend',
      title: 'Eine Plattform braucht ein stabiles Backend',
    },
    {
      label: 'Wartbarkeit',
      title: 'Eine bestehende Anwendung ist schwer wartbar geworden',
    },
    {
      label: 'API',
      title: 'Eine API muss neu aufgebaut oder stabilisiert werden',
    },
    {
      label: 'Architektur',
      title: 'Ein Team braucht Unterstützung bei Backend-Architektur',
    },
  ];

  const collaborationSteps = [
    {
      label: 'Schritt 01',
      title: 'Erstgespräch',
      text: 'Verständnis der Idee oder des bestehenden Systems.',
    },
    {
      label: 'Schritt 02',
      title: 'Technische Analyse',
      text: 'Bewertung möglicher Architektur und Lösungswege.',
    },
    {
      label: 'Schritt 03',
      title: 'Struktur und Planung',
      text: 'Definition der Systemstruktur und Umsetzungsschritte.',
    },
    {
      label: 'Schritt 04',
      title: 'Iterative Entwicklung',
      text: 'Umsetzung in klaren Entwicklungsschritten mit regelmäßiger Abstimmung.',
    },
  ];

  return (
    <div className="site-shell">
      <Header />
      <main className="page-content">
        <section id="home" className="hero-section section-shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="section-kicker">Backend-orientierte Fullstack-Entwicklung</span>
              <h1>Webplattformen, APIs und MVPs – technisch sauber entwickelt.</h1>
              <p className="hero-lead">
                Ich entwickle Webplattformen, APIs und technische MVPs für
                Startups, Gründer und Unternehmen mit bestehenden Systemen.
              </p>
              <p className="hero-lead">
                Mein Schwerpunkt liegt im Backend: strukturierte
                Business-Logik, stabile Schnittstellen und Systeme, die
                langfristig wartbar bleiben.
              </p>
              <div className="hero-points">
                <span>Entwicklung von Webplattformen und Single-Page-Applications</span>
                <span>Backend-Systeme und APIs mit .NET</span>
                <span>MVPs und Prototypen für neue Produktideen</span>
                <span>Stabilisierung und Weiterentwicklung bestehender Software</span>
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
                  Fullstack-Entwickler mit Schwerpunkt Backend für
                  Webplattformen, APIs, MVPs und die technische
                  Weiterentwicklung bestehender Systeme.
                </p>
              </div>
              <div className="hero-metrics">
                <div className="metric-card">
                  <strong>.NET</strong>
                  <span>Backend-Systeme und APIs mit klarer Struktur</span>
                </div>
                <div className="metric-card">
                  <strong>MVPs</strong>
                  <span>Pragmatische Umsetzung neuer Produktideen</span>
                </div>
                <div className="metric-card">
                  <strong>M.Sc.</strong>
                  <span>Cyber-Sicherheit mit Blick auf Architektur und Risiken</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <Aboutme />
        <section className="content-section section-shell">
          <div className="section-header">
            <div>
              <span className="section-kicker">Typische Projektsituationen</span>
              <h2>Wann ich typischerweise ins Projekt komme</h2>
            </div>
            <p>
              Viele Projekte starten mit einer Idee oder mit Software, die über
              die Zeit komplex geworden ist. In diesen Situationen unterstütze
              ich dabei, technische Lösungen strukturiert umzusetzen.
            </p>
          </div>

          <div className="focus-grid">
            {projectSituations.map((situation) => (
              <article key={situation.title} className="focus-card">
                <span className="card-label">{situation.label}</span>
                <h3>{situation.title}</h3>
              </article>
            ))}
          </div>
        </section>
        <Skills />
        <section className="content-section section-shell">
          <div className="section-header">
            <div>
              <span className="section-kicker">Zusammenarbeit</span>
              <h2>So läuft die Zusammenarbeit typischerweise ab</h2>
            </div>
            <p>
              Viele Projekte beginnen mit einer Idee oder einem bestehenden
              System, das weiterentwickelt werden soll. Eine klare technische
              Struktur hilft dabei, Projekte effizient umzusetzen.
            </p>
          </div>

          <div className="service-grid">
            {collaborationSteps.map((step) => (
              <article key={step.title} className="service-card">
                <span className="card-label">{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>
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
