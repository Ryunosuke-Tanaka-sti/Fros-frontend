import { TipsComponent } from '../TipsComponent/TipsComponent';

type CardContentLicenseProps = {
  title: string;
  period?: Date;
};

export const CardContentLicense = (props: CardContentLicenseProps) => {
  const { title, period } = props;
  const dateFormate = (date: Date) => {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  };
  return (
    <>
      <ul className="flex h-auto flex-row items-center justify-between font-noto text-lg text-pick-default">
        <li>{title}</li>
        {period ? <li className="py-1">{dateFormate(period)}</li> : <TipsComponent />}
      </ul>
    </>
  );
};
