import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';
import { SelectRouteComponent } from '@/components/common/SelectRouteComponent/SelectRouteComponent';

export const SearchLayout = () => {
  const [searchRoute, setSearchRoute] = useState<string>('user');
  const navigate = useNavigate();
  const onChangeRoute = (value: string) => {
    setSearchRoute(value);
    if (value == 'user') {
      navigate('/');
      return;
    }
    navigate(`/${value}`);
  };

  return (
    <>
      <div className="flex h-20 flex-row items-center justify-center">
        <SelectRouteComponent value={searchRoute} onChangeValue={onChangeRoute} />
        <span className="w-24">
          <ButtonComponent color="main" text="Search" onClick={() => null} />
        </span>
      </div>
      <Outlet />
    </>
  );
};
