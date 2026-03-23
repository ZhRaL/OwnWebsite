import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import './App.css';
import Aboutme from './Components/Aboutme';
import Contact from './Components/Contact/Contact';
import Datenschutz from './Components/Datenschutz';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Impressum from './Components/Impressum';
import LegalStrip from './Components/LegalStrip';

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
              <span className="section-kicker">Leistungen</span>
              <h1>Leistungen</h1>
            </div>
          </div>

          <div className="body-copy hero-body">
            <p>Ich bin freiberuflicher Softwareentwickler und biete folgende Leistungen an.</p>
            {services.map((service) => (
              <p key={service.title}>
                <strong>{service.title}:</strong> {service.text}
              </p>
            ))}
          </div>
        </section>

        <Aboutme />
        <Contact />
      </main>
      <LegalStrip />
      <Footer />
    </div>
  );
}

function LegalPage({ children }) {
  return (
    <div className="site-shell">
      <Header />
      <main className="page-content">
        <section className="section-shell legal-page">
          {children}
        </section>
      </main>
      <LegalStrip />
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
        <Route
          path="/impressum"
          element={
            <LegalPage>
              <Impressum />
            </LegalPage>
          }
        />
        <Route
          path="/datenschutz"
          element={
            <LegalPage>
              <Datenschutz />
            </LegalPage>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
