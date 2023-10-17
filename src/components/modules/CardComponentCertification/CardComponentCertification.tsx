import { CardContentCertification } from '@/components/common/CardContentCertification/CardContentCertification';
import { CardTitle } from '@/components/common/CardTitle/CardTitle';
import { DividerComponent } from '@/components/common/Divider/Divider';

type CardComponentCertificationProps = {
  Certifications: { title: string; period?: Date }[];
};

export const CardComponentCertification = (props: CardComponentCertificationProps) => {
  const { Certifications } = props;
  return (
    <>
      <div className="flex flex-col gap-3 rounded-lg border-4 border-main-sub p-6">
        <CardTitle title="ユーザー情報" />
        <DividerComponent />
        <div className="flex flex-col gap-4">
          {Certifications.map((Certification) => (
            <CardContentCertification key={Certification.title} title={Certification.title} period={Certification.period} />
          ))}
        </div>
      </div>
    </>
  );
};
