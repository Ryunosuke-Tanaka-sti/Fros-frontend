import { Outlet, useNavigate } from 'react-router-dom';

import { FooterComponent } from '@/components/modules/FooterComponent/FooterComponent';
import { HeaderComponent } from '@/components/modules/HeaderComponent/HeaderComponent';
import { useAuth } from '@/hooks/useAuth';
import { useUser } from '@/hooks/useUser';
import { RouteHasAuthenticated } from '@/routers/RouteHasAuthenticated';
import { LoadingComponent } from '@/utilities/LoadingComponent';

export const Layout = () => {
  const navigate = useNavigate();
  const onClickNavigate = (path: '/' | '/profile') => navigate(path);

  const { uid } = useAuth();
  const { userData, isLoadingUserData } = useUser(uid);
  if (!userData && isLoadingUserData) return <LoadingComponent />;

  return (
    <>
      <HeaderComponent onClickNavigate={onClickNavigate} />
      <main className="flex grow flex-col px-7">
        <RouteHasAuthenticated>
          <Outlet />
        </RouteHasAuthenticated>
      </main>
      <FooterComponent />
    </>
  );
};
