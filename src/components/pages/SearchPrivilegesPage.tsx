import { useState } from 'react';

import { readSearchPrivilegesData } from '@/api/users';
import { SearchCardSelect } from '@/components/modules/SearchCardSelect/SearchCardSelect';
import { SearchResultComponentAuthority } from '@/components/modules/SearchResultComponentAuthority/SearchResultComponentAuthority';
import { usePrivilegesInfo } from '@/hooks/useInformation';
import { useSearchPrivileges } from '@/hooks/useSearchUserData';
import { NameToID } from '@/types/Common';
import { LoadingComponent } from '@/utilities/LoadingComponent';

export const SearchPrivilegesPage = () => {
  const { searchPrivilegesData, isLoadingSearchPrivileges, mutate } = useSearchPrivileges();
  const { privilegesData, isLoadingPrivileges } = usePrivilegesInfo();
  const [selectID, setSelectID] = useState<NameToID>({ id: '', name: '' });

  const onClick = (select: string) => {
    const _selectID = privilegesData?.find((privilege) => privilege.id === select);
    if (!_selectID) return;
    setSelectID(_selectID);
    mutate(readSearchPrivilegesData(select));
  };

  if (!privilegesData && isLoadingPrivileges) return <LoadingComponent />;
  if (!searchPrivilegesData && isLoadingSearchPrivileges) return <LoadingComponent />;

  console.log(searchPrivilegesData);

  return (
    <div className="flex flex-row items-start gap-2">
      <SearchCardSelect title="権限検索" searchList={privilegesData} onClick={onClick} />
      <div className=" grid grow grid-flow-row grid-cols-3  place-content-stretch place-items-center  gap-y-3">
        {searchPrivilegesData ? (
          searchPrivilegesData.map((privilege) => <SearchResultComponentAuthority key={privilege.id} authority={privilege.name} title={selectID.name} />)
        ) : (
          <div className="col-span-3 flex h-full w-full grow items-center justify-center rounded-lg border-2 border-main-sub p-4 py-10">表示なし</div>
        )}
      </div>
    </div>
  );
};
