import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';
import { CardContentNormal } from '@/components/common/CardContentNormal/CardContentNormal';
import { CardTitle } from '@/components/common/CardTitle/CardTitle';
import { DividerComponent } from '@/components/common/Divider/Divider';
import { UserInfoType } from '@/types/User';

type CardComponentUserType = {
  userInfo: UserInfoType;
  ownFlag: boolean;
  onClick?: () => void;
};

export const CardComponentUser = (props: CardComponentUserType) => {
  const { onClick, ownFlag, userInfo } = props;
  const { image, name, email, service_line } = userInfo;
  return (
    <>
      <div className="flex w-96 flex-col items-center gap-3 rounded-lg border-4 border-main-sub p-3">
        <img src={image} className="h-[300px] w-[300px] rounded-full object-contain" alt="" />
        <CardTitle title="ユーザー情報" />
        <DividerComponent />
        <div className="flex w-full flex-col gap-2">
          <CardContentNormal content={name} title="名前" />
          <CardContentNormal content={email} title="アドレス" />
          <CardContentNormal content={service_line} title="所属SL" />
        </div>
        {ownFlag ? <ButtonComponent color="main" text="編集" onClick={onClick} /> : <></>}
      </div>
    </>
  );
};
