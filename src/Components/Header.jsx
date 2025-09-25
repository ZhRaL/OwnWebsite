import HeaderElement from './HeaderElement';

const Header = () => {
  return (
    <div className="header">
      <HeaderElement title="Home" />
      <HeaderElement title="About me" />
      <HeaderElement title="Projects" />
      <HeaderElement title="Technologies" />
      <HeaderElement title="Contact" />
    </div>
  );
};

export default Header;
