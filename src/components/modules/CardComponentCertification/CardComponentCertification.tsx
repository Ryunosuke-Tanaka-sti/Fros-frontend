import { CardContentCertification } from '@/components/common/CardContentCertification/CardContentCertification';
import { DividerComponent } from '@/components/common/Divider/Divider';
import { Title } from '@/components/common/Title/Title';
import { CertificationsType } from '@/types/Certification';

export const CardComponentCertification = (props: CertificationsType) => {
  const { certifications } = props;
  return (
    <>
      <div className="flex flex-col gap-3 rounded-lg border-4 border-main-sub p-6">
        <Title title="ユーザー情報" />
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
