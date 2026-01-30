import HeaderElement from './HeaderElement';
import Logo from '../assets/Logo_Final.png';
import Icon from '../assets/Icon.png';

const Header = () => {
  return (
    <nav
      className="header flex gap-4 justify-between items-center h-20 py-4 bg-white shadow-md rounded-b-xl mb-8"
      role="navigation"
      aria-label="Hauptnavigation"
    >
      <div className="header__left flex items-center">
        <a href="/" className="header__logo-link">
          <img src={Icon} alt="Logo" className="header__logo" />
        </a>
      </div>

      <div className="header__center flex gap-4 items-center">
        <HeaderElement title="Start" targetId="aboutme" />
        <HeaderElement title="Kenntnisse & Skills" targetId="skills" />
        <HeaderElement title="Projekte" targetId="projects" />
        <HeaderElement title="Technologies" targetId="technologies" />
        <HeaderElement title="Kontakt" targetId="contact" />
      </div>
    </nav>
  );
};

export default Header;
