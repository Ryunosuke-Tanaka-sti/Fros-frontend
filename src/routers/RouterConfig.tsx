import { Route, Routes } from 'react-router-dom';

import { Layout } from '@/components/layout/Layout';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<></>} />
      </Route>
    </Routes>
  );
};
