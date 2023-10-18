import { Outlet, useNavigate } from 'react-router-dom';

import { FooterComponent } from '@/components/modules/FooterComponent/FooterComponent';
import { HeaderComponent } from '@/components/modules/HeaderComponent/HeaderComponent';
import { RouteHasAuthenticated } from '@/routers/RouteHasAuthenticated';

export const Layout = () => {
  const navigate = useNavigate();
  const onClickNavigate = (path: '/' | '/profile') => navigate(path);
  return (
    <>
      <HeaderComponent onClickNavigate={onClickNavigate} />
      <main className="flex grow flex-col">
        <RouteHasAuthenticated>
          <Outlet />
        </RouteHasAuthenticated>
      </main>
      <FooterComponent />
    </>
  );
};
