import { CardContentCertification } from '@/components/common/CardContentCertification/CardContentCertification';
import { CardContentTitle } from '@/components/common/CardContentTitle/CardContentTitle';
import { DividerComponent } from '@/components/common/Divider/Divider';
import { CertificationType } from '@/types/Certification';

type SearchResultComponentCertificationProps = {
  name: string;
  certification: CertificationType;
};

export const SearchResultComponentCertification = (props: SearchResultComponentCertificationProps) => {
  const { name, certification } = props;
  return (
    <>
      <div className="flex w-full max-w-md flex-col gap-3 rounded-lg border-2 border-main-sub p-4">
        <CardContentTitle title={name} />
        <DividerComponent />
        <CardContentCertification certification={certification} />
      </div>
    </>
  );
};
