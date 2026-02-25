import React, { useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Components/Header';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';
import Projects from './Components/Projects/Projects';
import Technologies from './Components/Technologies/Technologies';
import Contact from './Components/Contact/Contact';
import HeaderBackground from './assets/Header_Element.png';
import Impressum from './Components/Impressum';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location?.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        try {
          window.history.replaceState({}, document.title, window.location.href);
        } catch (e) {}
      }, 50);
    } else if (location?.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, [location]);
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center bg-fixed"
      id="global-bg"
    >
      <Header />
      <img
        src={HeaderBackground}
        alt=""
        className="object-contain fixed flex"
        style={{ height: '320px', opacity: 1 }}
      />
      <main
        className="w-full max-w-4xl flex flex-col items-center px-4 z-10 rounded-xl shadow-lg my-8"
        style={{ background: 'rgba(255,255,255,0.75)' }}
      >
        <Aboutme />
        <Skills />
        <div className="my-8 flex justify-center w-full">
          <div className="w-2/3 h-0.5 bg-gray-300 rounded"></div>
        </div>

        <Projects />
        <div className="my-8 flex justify-center w-full">
          <div className="w-2/3 h-0.5 bg-gray-300 rounded"></div>
        </div>

        <Technologies />
        <div className="my-8 flex justify-center w-full">
          <div className="w-2/3 h-0.5 bg-gray-300 rounded"></div>
        </div>

        <Contact />
        <div className="w-full text-center mt-4 mb-6">
          <span>© {new Date().getFullYear()} Sebastian Albert</span>
          <span className="mx-2">•</span>
          <Link to="/impressum" className="text-blue-700 hover:underline">
            Impressum
          </Link>
        </div>
        <div className="mb-12" />
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/impressum"
          element={
            <div
              className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center bg-fixed"
              id="global-bg"
            >
              <Header />
              <main
                className="w-full max-w-4xl flex flex-col items-start px-4 z-10 rounded-xl shadow-lg my-8"
                style={{ background: 'rgba(255,255,255,0.75)' }}
              >
                <Impressum />
              </main>
            </div>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
