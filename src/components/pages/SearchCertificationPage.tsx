import { SearchCardSelect } from '@/components/modules/SearchCardSelect/SearchCardSelect';
import { SearchResultComponentCertification } from '@/components/modules/SearchResultComponentCertification/SearchResultComponentCertification';

export const SearchCertificationPage = () => {
  return (
    <div className=" flex flex-row items-start">
      <SearchCardSelect title="資格検索" searchList={[]} onClick={() => null} />
      <div className=" grid grow grid-flow-row grid-cols-3  place-content-stretch place-items-center  gap-y-3">
        <SearchResultComponentCertification name="test" certification={{ id: 'xxx', name: 'HTML' }} />
        <SearchResultComponentCertification name="test" certification={{ id: 'xxx', name: 'HTML' }} />
        <SearchResultComponentCertification name="test" certification={{ id: 'xxx', name: 'HTML' }} />
      </div>
    </div>
  );
};
