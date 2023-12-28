import { useState } from 'react';

import { readSearchSkillsData } from '@/api/users';
import { SearchCardSelect } from '@/components/modules/SearchCardSelect/SearchCardSelect';
import { SearchResultComponentSkill } from '@/components/modules/SearchResultComponentSkill/SearchResultComponentSkill';
import { useSkillsInfo } from '@/hooks/useInformation';
import { useSearchSkills } from '@/hooks/useSearchUserData';
import { NameToID } from '@/types/Common';
import { LoadingComponent } from '@/utilities/LoadingComponent';

export const SearchSkillPage = () => {
  const { skillsData, isLoadingSkillsData } = useSkillsInfo();
  const { searchSkillsData, isLoadingSearchSkillsData, mutate } = useSearchSkills();
  const [selectID, setSelectID] = useState<NameToID>({ id: '', name: '' });

  const onClick = (select: string) => {
    const _selectID = skillsData?.find((skill) => skill.id === select);
    if (!_selectID) return;
    setSelectID(_selectID);
    mutate(readSearchSkillsData(select));
  };

  if (!skillsData && isLoadingSkillsData) return <LoadingComponent />;
  if (!searchSkillsData && isLoadingSearchSkillsData) return <LoadingComponent />;
  console.log(searchSkillsData);

  return (
    <div className=" flex flex-row items-start gap-2">
      <SearchCardSelect title="スキル検索" searchList={skillsData} onClick={onClick} />
      <div className=" grid grow grid-flow-row grid-cols-3  place-content-stretch place-items-center  gap-y-3">
        {searchSkillsData ? (
          searchSkillsData.map((skill) => <SearchResultComponentSkill key={skill.id} name={skill.name} image={skill.image} skill={{ id: selectID.id, level: 2, name: selectID.name }} />)
        ) : (
          <div className="col-span-3 flex h-full w-full grow items-center justify-center rounded-lg border-2 border-main-sub p-4 py-10">表示なし</div>
        )}
      </div>
    </div>
  );
};
