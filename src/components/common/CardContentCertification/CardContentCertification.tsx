import { TipsComponent } from '@/components/common/TipsComponent/TipsComponent';
import { CertificationType } from '@/types/Certification';

type CardContentCertificationProps = {
  certification: CertificationType;
};

export const CardContentCertification = (props: CardContentCertificationProps) => {
  const { certification } = props;
  const { name, expiration } = certification;
  const dateFormate = (date: Date) => {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  };
  return (
    <>
      <ul className="flex h-auto flex-row items-center justify-between font-noto text-lg text-pick-default">
        <li>{name}</li>
        {expiration ? <li className="py-1">{dateFormate(expiration)}</li> : <TipsComponent />}
      </ul>
    </>
  );
};
