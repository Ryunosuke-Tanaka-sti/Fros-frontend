import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { TabRoute } from '@/components/modules/TabRoute/TabRoute';

export const SearchLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onChangeRoute = (value: string) => {
    if (value == 'summary') {
      navigate('/');
      return;
    }
    navigate(`/${value}`);
  };

  return (
    <>
      <div className="flex h-20 flex-row items-center justify-start">
        <TabRoute onClick={onChangeRoute} value={pathname} />
      </div>
      <Outlet />
    </>
  );
};
