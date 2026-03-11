import { useLocation, useNavigate } from 'react-router-dom';

const HeaderElement = ({ title, targetId, primary = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      className={
        primary
          ? 'ml-2 inline-flex min-h-[44px] cursor-pointer items-center rounded-2xl border border-slate-900 bg-slate-950 px-5 text-sm font-bold text-slate-50 transition hover:bg-slate-800'
          : 'inline-flex min-h-[44px] cursor-pointer items-center rounded-2xl px-4 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950'
      }
      onClick={handleClick}
      type="button"
    >
      {title}
    </button>
  );
};

export default HeaderElement;
