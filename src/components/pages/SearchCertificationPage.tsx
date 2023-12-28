import { useState } from 'react';

import { readSearchCertificationsData } from '@/api/users';
import { SearchCardSelect } from '@/components/modules/SearchCardSelect/SearchCardSelect';
import { SearchResultComponentCertification } from '@/components/modules/SearchResultComponentCertification/SearchResultComponentCertification';
import { useCertificationsInfo } from '@/hooks/useInformation';
import { useSearchCertification } from '@/hooks/useSearchUserData';
import { NameToID } from '@/types/Common';
import { LoadingComponent } from '@/utilities/LoadingComponent';

export const SearchCertificationPage = () => {
  const { certificationsData, isLoadingCertifications } = useCertificationsInfo();
  const { searchCertificationsData, isLoadingSearchCertifications, mutate } = useSearchCertification();
  const [selectID, setSelectID] = useState<NameToID>({ id: '', name: '' });

  const onClick = (select: string) => {
    const _selectID = certificationsData?.find((certification) => certification.id === select);
    if (!_selectID) return;
    setSelectID(_selectID);
    mutate(readSearchCertificationsData(select));
  };

  if (!certificationsData && isLoadingCertifications) return <LoadingComponent />;
  if (!searchCertificationsData && isLoadingSearchCertifications) return <LoadingComponent />;

  return (
    <div className=" flex flex-row items-start gap-2">
      <SearchCardSelect title="資格検索" searchList={certificationsData} onClick={onClick} />
      <div className=" grid grow grid-flow-row grid-cols-3  place-content-stretch place-items-center  gap-y-3">
        {searchCertificationsData ? (
          searchCertificationsData.map((certification) => (
            <SearchResultComponentCertification key={certification.id} name={certification.name} certification={{ id: selectID.id, name: selectID.name }} />
          ))
        ) : (
          <div className="col-span-3 flex h-full w-full grow items-center justify-center rounded-lg border-2 border-main-sub p-4 py-10">表示なし</div>
        )}
      </div>
    </div>
  );
};
