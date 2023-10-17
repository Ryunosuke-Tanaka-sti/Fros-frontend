import { CardContentCertification } from '@/components/common/CardContentCertification/CardContentCertification';
import { CardContentTitle } from '@/components/common/CardContentTitle/CardContentTitle';
import { DividerComponent } from '@/components/common/Divider/Divider';

type SearchResultComponentCertificationProps = {
  name: string;
  Certification: string;
  period?: Date;
};

export const SearchResultComponentCertification = (props: SearchResultComponentCertificationProps) => {
  const { name, Certification, period } = props;
  return (
    <>
      <div className="flex max-w-md flex-col gap-3 rounded-lg border-2 border-main-sub p-4">
        <CardContentTitle title={name} />
        <DividerComponent />
        <CardContentCertification title={Certification} period={period} />
      </div>
    </>
  );
};
