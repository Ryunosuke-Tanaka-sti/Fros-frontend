import { CardContentTitle } from '../CardContentTitle/CardContentTitle';

type SearchResultComponentUserProps = {
  name: string;
};

export const SearchResultComponentUser = (props: SearchResultComponentUserProps) => {
  const { name } = props;
  return (
    <>
      <div className="flex max-w-md flex-col gap-3 rounded-lg border-2 border-main-sub p-4">
        <CardContentTitle title={name} image="https://placehold.jp/150x150.png" />
      </div>
    </>
  );
};
