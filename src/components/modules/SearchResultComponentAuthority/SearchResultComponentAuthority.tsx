import { CardContentTitle } from '../CardContentTitle/CardContentTitle';
import { CardContentUser } from '../CardContentUser/CardContentUser';
import { DividerComponent } from '../Divider/Divider';

type SearchResultComponentAuthorityProps = {
  label?: string;
};

export const SearchResultComponentAuthority = (props: SearchResultComponentAuthorityProps) => {
  const {} = props;
  return (
    <div className="flex max-w-md flex-col gap-3 rounded-lg border-2 border-main-sub p-4">
      <CardContentTitle title="ブログアカウント発行" />
      <DividerComponent />
      <CardContentUser name="Tanaka Ryunosuke" image="https://placehold.jp/150x150.png" />
    </div>
  );
};
