import HeaderElement from './HeaderElement';

const Header = () => {
  return (
    <nav className="header flex gap-4 justify-center items-center py-4 bg-white shadow-md rounded-b-xl mb-8">
      <HeaderElement title="Home" targetId="aboutme" />
      <HeaderElement title="Projects" targetId="projects" />
      <HeaderElement title="Technologies" targetId="technologies" />
      <HeaderElement title="Contact" targetId="contact" />
    </nav>
  );
};

export default Header;
