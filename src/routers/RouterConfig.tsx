import { Outlet, Route, Routes } from 'react-router-dom';

import { Layout } from '@/components/layout/Layout';
import { SearchLayout } from '@/components/layout/SearchLayout';
import { OwnEditPage } from '@/components/pages/OwnEditPage';
import { OwnPage } from '@/components/pages/OwnPage';
import { SearchCertificationPage } from '@/components/pages/SearchCertificationPage';
import { SearchPrivilegesPage } from '@/components/pages/SearchPrivilegesPage';
import { SearchSkillPage } from '@/components/pages/SearchSkillPage';
import { SearchSummaryPage } from '@/components/pages/SearchSummaryPage';
import { SearchUserPage } from '@/components/pages/SearchUserPage';
import { UserPage } from '@/components/pages/UserPage';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<SearchLayout />}>
          <Route index element={<SearchSummaryPage />} />
          <Route path="user" element={<SearchUserPage />} />
          <Route path="skill" element={<SearchSkillPage />} />
          <Route path="authority" element={<SearchPrivilegesPage />} />
          <Route path="certification" element={<SearchCertificationPage />} />
        </Route>
        <Route path="profile" element={<Outlet />}>
          <Route index element={<OwnPage />} />
          <Route path="edit" element={<OwnEditPage />} />
          <Route path=":id" element={<UserPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
