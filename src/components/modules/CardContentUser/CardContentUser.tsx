type CardContentUserProps = {
  image: string;
  name: string;
};

export const CardContentUser = (props: CardContentUserProps) => {
  const { image, name } = props;
  return (
    <>
      <div className="flex flex-row items-center gap-3 font-noto  text-pick-default">
        <img src={image} className="h-9 w-9 rounded-full" alt="" />
        <span className="text-lg">{name}</span>
      </div>
    </>
  );
};
