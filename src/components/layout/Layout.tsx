import { Outlet } from 'react-router-dom';

import { RouteHasAuthenticated } from '@/routers/RouteHasAuthenticated';

export const Layout = () => {
  return (
    <>
      <main>
        <RouteHasAuthenticated>
          <Outlet />
        </RouteHasAuthenticated>
      </main>
    </>
  );
};
