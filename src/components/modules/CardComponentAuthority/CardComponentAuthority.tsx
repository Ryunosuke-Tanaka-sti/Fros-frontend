import { CardTitle } from '@/components/common/CardTitle/CardTitle';
import { DividerComponent } from '@/components/common/Divider/Divider';
import { AuthoritiesType } from '@/types/Authority';

export const CardComponentAuthority = (props: AuthoritiesType) => {
  const { authorities } = props;
  return (
    <>
      <div className="flex flex-col gap-3 rounded-lg border-4 border-main-sub p-6">
        <CardTitle title="資格" />
        <DividerComponent />
        <div className="flex flex-col gap-4">
          {authorities.map((authority) => (
            <span className="font-noto text-lg" key={authority.id}>
              {authority.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
