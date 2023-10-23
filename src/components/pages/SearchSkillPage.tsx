import { SearchCardSelect } from '@/components/modules/SearchCardSelect/SearchCardSelect';
import { SearchResultComponentSkill } from '@/components/modules/SearchResultComponentSkill/SearchResultComponentSkill';

export const SearchSkillPage = () => {
  return (
    <div className=" flex flex-row items-start">
      <SearchCardSelect title="スキル検索" searchList={[]} onClick={() => null} />
      <div className=" grid grow grid-flow-row grid-cols-3  place-content-stretch place-items-center  gap-y-3">
        <SearchResultComponentSkill name="test" skill={{ id: 'xxx', level: 3, name: 'HTML' }} />
        <SearchResultComponentSkill name="test" skill={{ id: 'xxx', level: 3, name: 'HTML' }} />
        <SearchResultComponentSkill name="test" skill={{ id: 'xxx', level: 3, name: 'HTML' }} />
      </div>
    </div>
  );
};
