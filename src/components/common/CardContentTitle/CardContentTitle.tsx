type CardContentTitleProps = {
  title: string;
  image?: string;
};

export const CardContentTitle = (props: CardContentTitleProps) => {
  const { title, image } = props;
  return (
    <>
      <div className="flex flex-row items-center gap-3 font-noto  text-pick-default">
        {image ? <img src={image} className="h-9 w-9 rounded-full" alt="" /> : <></>}
        <div className="text-2xl font-bold">{title}</div>
      </div>
    </>
  );
};
