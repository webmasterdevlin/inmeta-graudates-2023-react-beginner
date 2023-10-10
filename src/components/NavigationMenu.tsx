import { useLocation, useNavigate } from 'react-router';

type Props = {
  pathname: string;
  label: string;
};

const NavigationMenu = ({ pathname, label }: Props) => {
  const navigate = useNavigate();
  const { pathname: path } = useLocation();

  return (
    <button
      onClick={() => {
        return navigate(pathname);
      }}
      className={`mb-2 mr-2 rounded-lg px-5 py-2.5 text-center text-sm font-medium uppercase text-black ${
        path === pathname ? 'bg-gray-200' : 'bg-gray-100'
      }`}
    >
      {label}
    </button>
  );
};
export default NavigationMenu;
