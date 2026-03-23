import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon2 from '../assets/Logo_Final2.png';
import HeaderElement from './HeaderElement';

const navigationItems = [
  { title: 'Leistungen', targetId: 'home' },
  { title: 'Typische Szenarien', targetId: 'scenarios' },
  { title: 'Über mich', targetId: 'about' },
  { title: 'Kontakt', targetId: 'contact' },
];

const Header = () => {
  const location = useLocation();
  const [isHiddenOnMobile, setIsHiddenOnMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobileViewport = window.innerWidth <= 720;

      if (!isMobileViewport) {
        setIsHiddenOnMobile(false);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY <= 16) {
        setIsHiddenOnMobile(false);
      } else if (currentScrollY > lastScrollY + 8) {
        setIsHiddenOnMobile(true);
      } else if (currentScrollY < lastScrollY - 8) {
        setIsHiddenOnMobile(false);
      }

      lastScrollY = currentScrollY;
    };

    const handleResize = () => {
      if (window.innerWidth > 720) {
        setIsHiddenOnMobile(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return undefined;
    }

    const updateActiveSection = () => {
      const triggerLine = window.innerHeight * 0.5;
      let nextActiveSection = navigationItems[0]?.targetId ?? '';

      navigationItems.forEach(({ targetId }) => {
        const element = document.getElementById(targetId);
        if (!element) {
          return;
        }

        const { top } = element.getBoundingClientRect();
        if (top <= triggerLine) {
          nextActiveSection = targetId;
        }
      });

      setActiveSection(nextActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [location.pathname]);

  return (
    <header
      className={`site-header sticky top-0 z-50 border-b border-slate-200 bg-white ${
        isHiddenOnMobile ? 'site-header--hidden' : ''
      }`}
    >
      <div className="site-header__inner mx-auto flex w-[min(1180px,calc(100%-32px))] flex-wrap items-center justify-between gap-4 py-4">
        <Link className="site-header__brand flex items-center gap-3" to="/">
          <img
            alt="Alpha Coding Icon"
            className="h-11 w-11 rounded-xl object-cover"
            src={Icon2}
          />
          <span className="text-lg font-bold tracking-[-0.03em] text-slate-950">
            Alpha-Coding
          </span>
        </Link>

        <nav
          className="flex flex-wrap items-center justify-end gap-1"
          aria-label="Hauptnavigation"
        >
          {navigationItems.map((item) => (
            <HeaderElement
              active={activeSection === item.targetId}
              key={item.targetId}
              targetId={item.targetId}
              title={item.title}
            />
          ))}
          <HeaderElement
            active={activeSection === 'contact'}
            primary
            targetId="contact"
            title="Projekt anfragen"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
