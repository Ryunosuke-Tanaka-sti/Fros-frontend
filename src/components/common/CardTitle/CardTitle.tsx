import { AiFillLock } from 'react-icons/ai';

type CardTitleProps = {
  title: string;
};

export const CardTitle = (props: CardTitleProps) => {
  const { title } = props;
  return (
    <>
      <h2 className="flex w-full flex-row items-center gap-3 text-main-default">
        <AiFillLock className="h-6 w-6" />
        <span className="font-noto text-2xl font-bold">{title}</span>
      </h2>
    </>
  );
};
