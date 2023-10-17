import { CardContentLicense } from '@/components/common/CardContentLicense/CardContentLicense';
import { CardContentTitle } from '@/components/common/CardContentTitle/CardContentTitle';
import { DividerComponent } from '@/components/common/Divider/Divider';

type SearchResultComponentLicenseProps = {
  name: string;
  license: string;
  period?: Date;
};

export const SearchResultComponentLicense = (props: SearchResultComponentLicenseProps) => {
  const { name, license, period } = props;
  return (
    <>
      <div className="flex max-w-md flex-col gap-3 rounded-lg border-2 border-main-sub p-4">
        <CardContentTitle title={name} />
        <DividerComponent />
        <CardContentLicense title={license} period={period} />
      </div>
    </>
  );
};
