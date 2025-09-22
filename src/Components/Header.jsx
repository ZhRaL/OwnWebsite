import HeaderElement from './HeaderElement';

const Header = () => {
  return (
    <div className="header">
      <HeaderElement title="Home" />
      <HeaderElement title="About me" />
      <HeaderElement title="Projects" />
    </div>
  );
};

export default Header;
