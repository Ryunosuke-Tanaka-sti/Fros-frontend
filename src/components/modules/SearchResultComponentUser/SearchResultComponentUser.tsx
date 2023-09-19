import { CardContentTitle } from '../CardContentTitle/CardContentTitle';

type SearchResultComponentUserProps = {
  label?: string;
};

export const SearchResultComponentUser = (props: SearchResultComponentUserProps) => {
  const {} = props;
  return (
    <>
      <div className="flex max-w-md flex-col gap-3 rounded-lg border-2 border-main-sub p-4">
        <CardContentTitle title="Tanaka Ryunosuke" image="https://placehold.jp/150x150.png" />
      </div>
    </>
  );
};
