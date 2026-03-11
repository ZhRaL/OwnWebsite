import { Link } from 'react-router-dom';
import Icon2 from '../assets/Logo_Final2.png';
import HeaderElement from './HeaderElement';

const navigationItems = [
  { title: 'Start', targetId: 'home' },
  { title: 'Profil', targetId: 'about' },
  { title: 'Leistungen', targetId: 'services' },
  { title: 'Erfahrung', targetId: 'projects' },
  { title: 'Kompetenzen', targetId: 'technologies' },
  { title: 'Kontakt', targetId: 'contact' },
];

const Header = () => {
  return (
    <header className="site-header sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
      <div className="site-header__inner mx-auto flex w-[min(1180px,calc(100%-32px))] flex-wrap items-center justify-between gap-4 py-4">
        <Link className="site-header__brand flex items-center gap-3" to="/">
          <img alt="Alpha Coding Icon" className="h-11 w-11 rounded-xl object-cover" src={Icon2} />
          <span className="text-lg font-bold tracking-[-0.03em] text-slate-950">Alpha-Coding</span>
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-1" aria-label="Hauptnavigation">
          {navigationItems.map((item) => (
            <HeaderElement key={item.targetId} targetId={item.targetId} title={item.title} />
          ))}
          <HeaderElement primary targetId="contact" title="Projekt anfragen" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
