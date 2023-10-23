import { SearchCardInput } from '@/components/modules/SearchCardInput/SearchCardInput';
import { SearchResultComponentUser } from '@/components/modules/SearchResultComponentUser/SearchResultComponentUser';

export const SearchUserPage = () => {
  return (
    <div className=" flex flex-row items-start">
      <SearchCardInput title="ユーザー検索" onClick={() => null} />
      <div className=" grid grow grid-flow-row grid-cols-3  place-content-end place-items-center  gap-y-3">
        <SearchResultComponentUser name="test" />
        <SearchResultComponentUser name="test" />
        <SearchResultComponentUser name="test" />
        <SearchResultComponentUser name="test" />
        <SearchResultComponentUser name="test" />
        <SearchResultComponentUser name="test" />
      </div>
    </div>
  );
};
