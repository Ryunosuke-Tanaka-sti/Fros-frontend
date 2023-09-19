import { CardContentLicense } from '../CardContentLicense/CardContentLicense';
import { CardContentTitle } from '../CardContentTitle/CardContentTitle';
import { DividerComponent } from '../Divider/Divider';

type SearchResultComponentLicenseProps = {
  label?: string;
};

export const SearchResultComponentLicense = (props: SearchResultComponentLicenseProps) => {
  const {} = props;
  return (
    <>
      <div className="flex max-w-md flex-col gap-3 rounded-lg border-2 border-main-sub p-4">
        <CardContentTitle title="ブログアカウント発行" />
        <DividerComponent />
        <CardContentLicense title="AZ-104" />
      </div>
    </>
  );
};
