import { CardContentNormal } from '@/components/common/CardContentNormal/CardContentNormal';
import { DividerComponent } from '@/components/common/Divider/Divider';
import { Title } from '@/components/common/Title/Title';
import { UserInfoType } from '@/types/User';

export const CardComponentUser = (props: UserInfoType) => {
  const { name, email, service_line } = props;
  return (
    <>
      <div className="flex w-96 flex-col gap-3 rounded-lg p-3">
        <Title title="ユーザー情報" />
        <DividerComponent />
        <div className="flex flex-col gap-2">
          <CardContentNormal content={name} title="名前" />
          <CardContentNormal content={email} title="アドレス" />
          <CardContentNormal content={service_line} title="所属SL" />
        </div>
      </div>
    </>
  );
};
