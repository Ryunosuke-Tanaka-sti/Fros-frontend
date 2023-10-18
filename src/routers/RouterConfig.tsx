import { Outlet, Route, Routes } from 'react-router-dom';

import { Layout } from '@/components/layout/Layout';
import { SearchLayout } from '@/components/layout/SearchLayout';
import { OwnEditPage } from '@/components/pages/OwnEditPage';
import { OwnPage } from '@/components/pages/OwnPage';
import { SearchAuthorityPage } from '@/components/pages/SearchAuthorityPage';
import { SearchCertificationPage } from '@/components/pages/SearchCertificationPage';
import { SearchSkillPage } from '@/components/pages/SearchSkillPage';
import { SearchUserPage } from '@/components/pages/SearchUserPage';
import { UserPage } from '@/components/pages/UserPage';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<SearchLayout />}>
          <Route index element={<SearchUserPage />} />
          <Route path="skill" element={<SearchSkillPage />} />
          <Route path="authority" element={<SearchAuthorityPage />} />
          <Route path="certification" element={<SearchCertificationPage />} />
        </Route>
        <Route path=":id" element={<Outlet />}>
          <Route index element={<UserPage />} />
        </Route>
        <Route path="profile" element={<Outlet />}>
          <Route index element={<OwnPage />} />
          <Route path="edit" element={<OwnEditPage />} />
        </Route>
      </Route>
    </Routes>
  );
};