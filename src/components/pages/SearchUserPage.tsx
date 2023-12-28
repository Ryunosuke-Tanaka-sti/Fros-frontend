import { readSearchUsersData } from '@/api/users';
import { SearchCardInput } from '@/components/modules/SearchCardInput/SearchCardInput';
import { SearchResultComponentUser } from '@/components/modules/SearchResultComponentUser/SearchResultComponentUser';
import { useSearchUsers } from '@/hooks/useSearchUserData';
import { LoadingComponent } from '@/utilities/LoadingComponent';

export const SearchUserPage = () => {
  const { searchUsersData, isLoadingSearchUsersData, mutate } = useSearchUsers();

  const onClick = (user: string) => {
    mutate(readSearchUsersData(user));
  };
  if (!searchUsersData && isLoadingSearchUsersData) return <LoadingComponent />;

  return (
    <div className=" flex flex-row items-start gap-2">
      <SearchCardInput title="ユーザー検索" onClick={onClick} />
      <div className=" grid grow grid-flow-row grid-cols-3  place-content-end place-items-center  gap-y-3">
        {searchUsersData ? (
          searchUsersData.map((user) => <SearchResultComponentUser key={user.id} name={user.name} />)
        ) : (
          <div className="col-span-3 flex h-full w-full grow items-center justify-center rounded-lg border-2 border-main-sub p-4 py-10">表示なし</div>
        )}
      </div>
    </div>
  );
};
