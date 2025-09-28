import HeaderElement from './HeaderElement';

const Header = () => {
  return (
    <nav className="header flex gap-4 justify-center items-center py-4 bg-white shadow-md rounded-b-xl mb-8">
      <HeaderElement title="Home" route="/" />
      <HeaderElement title="Projects" route="/projects" />
      <HeaderElement title="Technologies" route="/technologies" />
      <HeaderElement title="Contact" route="/contact" />
    </nav>
  );
};

export default Header;
