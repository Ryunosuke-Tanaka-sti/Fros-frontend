import { CardContentTitle } from '@/components/common/CardContentTitle/CardContentTitle';
import { CardContentUser } from '@/components/common/CardContentUser/CardContentUser';
import { DividerComponent } from '@/components/common/Divider/Divider';

type SearchResultComponentAuthorityProps = {
  title: string;
  authority: string;
};

export const SearchResultComponentAuthority = (props: SearchResultComponentAuthorityProps) => {
  const { title, authority } = props;
  return (
    <div className="flex w-full max-w-md flex-col gap-3 rounded-lg border-2 border-main-sub p-4">
      <CardContentTitle title={authority} />
      <DividerComponent />
      <CardContentUser name={title} image="https://placehold.jp/150x150.png" />
    </div>
  );
};
