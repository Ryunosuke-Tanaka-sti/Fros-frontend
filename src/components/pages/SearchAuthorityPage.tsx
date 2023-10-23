import { SearchCardSelect } from '@/components/modules/SearchCardSelect/SearchCardSelect';
import { SearchResultComponentAuthority } from '@/components/modules/SearchResultComponentAuthority/SearchResultComponentAuthority';

export const SearchAuthorityPage = () => {
  return (
    <div className=" flex flex-row items-start">
      <SearchCardSelect title="権限検索" searchList={[]} onClick={() => null} />
      <div className=" grid grow grid-flow-row grid-cols-3  place-content-stretch place-items-center  gap-y-3">
        <SearchResultComponentAuthority authority="Test" title="Test" />
        <SearchResultComponentAuthority authority="Test" title="Test" />
        <SearchResultComponentAuthority authority="Test" title="Test" />
      </div>
    </div>
  );
};
