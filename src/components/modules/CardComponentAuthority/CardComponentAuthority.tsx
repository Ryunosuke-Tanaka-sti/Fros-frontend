import { DividerComponent } from '@/components/common/Divider/Divider';
import { Title } from '@/components/common/Title/Title';

type CardComponentAuthorityProps = {
  authorityList: string[];
};

export const CardComponentAuthority = (props: CardComponentAuthorityProps) => {
  const { authorityList } = props;
  return (
    <>
      <div className="flex flex-col gap-3 rounded-lg border-4 border-main-sub p-6">
        <Title title="ユーザー情報" />
        <DividerComponent />
        <div className="flex flex-col gap-4">
          {authorityList.map((authority) => (
            <span className="font-noto text-lg" key={authority}>
              {authority}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
