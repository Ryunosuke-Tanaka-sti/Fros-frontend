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
        {period ? <li className="py-1">{dateFormate(period)}</li> : <li className="rounded-full border border-main-default px-3 py-1 text-main-default">無制限</li>}
      </ul>
    </>
  );
};
