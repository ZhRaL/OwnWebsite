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
  const services = [
    {
      title: 'Webplattformen',
      text: 'Entwicklung von Webplattformen und Single-Page-Applications mit React und .NET. Saubere Backend-Strukturen und eine technische Grundlage, die langfristige Erweiterungen ermöglicht.',
    },
    {
      title: 'APIs und Backend-Systeme',
      text: 'Entwicklung stabiler APIs und Backend-Architekturen mit klar definierten Schnittstellen und nachvollziehbarer Datenverarbeitung.',
    },
    {
      title: 'Produkt-Prototypen und Minimal Viable Products (MVPs)',
      text: 'Technische Umsetzung von Produktideen als Prototyp oder Minimal Viable Product (MVP), um Konzepte schnell testbar zu machen.',
    },
    {
      title: 'Bestehende Systeme verbessern',
      text: 'Analyse und Weiterentwicklung vorhandener Anwendungen, um Struktur, Stabilität und Wartbarkeit zu verbessern.',
    },
  ];

  return (
    <div className="site-shell">
      <Header />
      <main className="page-content">
        <section id="home" className="hero-section section-shell">
          <div className="section-header hero-header">
            <div className="hero-copy hero-copy--wide">
              <h1>Webplattformen, APIs und technische Produkt-Prototypen</h1>
            </div>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <Aboutme />
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
