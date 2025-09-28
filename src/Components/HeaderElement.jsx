import { Link } from '@tanstack/react-router';

const HeaderElement = ({ title, route }) => {
  return (
    <Link
      to={route}
      className="HeaderElement px-4 py-2 rounded-lg font-semibold text-blue-900 hover:bg-blue-100 transition cursor-pointer"
    >
      {title}
    </Link>
  );
};

export default HeaderElement;
