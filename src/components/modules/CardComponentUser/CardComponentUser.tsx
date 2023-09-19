import { CardContentNormal } from '../CardContentNormal/CardContentNormal';
import { CardTitle } from '../CardTitle/CardTitle';
import { DividerComponent } from '../Divider/Divider';

type CardComponentUserProps = {
  name: string;
  mail: string;
  affiliation: string;
};

export const CardComponentUser = (props: CardComponentUserProps) => {
  const { mail, affiliation, name } = props;
  return (
    <>
      <div className="flex w-96 flex-col gap-3 rounded-lg p-3">
        <CardTitle title="ユーザー情報" />
        <DividerComponent />
        <div className="flex flex-col gap-2">
          <CardContentNormal content={name} title="名前" />
          <CardContentNormal content={mail} title="アドレス" />
          <CardContentNormal content={affiliation} title="所属SL" />
        </div>
      </div>
    </>
  );
};
