import { useNavigate, useLocation } from 'react-router-dom';

const HeaderElement = ({ title, targetId }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: targetId } });
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <span
      className="HeaderElement px-4 py-2 rounded-lg font-semibold text-blue-900 hover:bg-blue-100 transition cursor-pointer"
      onClick={handleClick}
    >
      {title}
    </span>
  );
};

export default HeaderElement;
