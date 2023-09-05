import { CardContentLicense } from '../CardContentLicense/CardContentLicense';
import { CardTitle } from '../CardTitle/CardTitle';

type CardComponentLicenseProps = {
  licenses: { title: string; period?: Date }[];
};

export const CardComponentLicense = (props: CardComponentLicenseProps) => {
  const { licenses } = props;
  return (
    <>
      <div className="flex flex-col gap-3 rounded-lg border-4 border-main-sub p-6">
        <CardTitle title="ユーザー情報" />
        <div className="h-0.5 w-full bg-pick-sub" />
        <div className="flex flex-col gap-4">
          {licenses.map((license) => (
            <CardContentLicense key={license.title} title={license.title} period={license.period} />
          ))}
        </div>
      </div>
    </>
  );
};
