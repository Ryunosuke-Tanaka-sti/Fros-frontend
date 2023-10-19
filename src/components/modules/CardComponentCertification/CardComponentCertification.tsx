import { CardContentCertification } from '@/components/common/CardContentCertification/CardContentCertification';
import { CardTitle } from '@/components/common/CardTitle/CardTitle';
import { DividerComponent } from '@/components/common/Divider/Divider';
import { CertificationsType } from '@/types/Certification';

export const CardComponentCertification = (props: CertificationsType) => {
  const { certifications } = props;
  return (
    <>
      <div className="flex flex-col gap-3 rounded-lg border-4 border-main-sub p-6">
        <CardTitle title="ユーザー情報" />
        <DividerComponent />
        <div className="flex flex-col gap-4">
          {certifications.map((certification) => (
            <CardContentCertification key={certification.id} certification={certification} />
          ))}
        </div>
      </div>
    </>
  );
};
