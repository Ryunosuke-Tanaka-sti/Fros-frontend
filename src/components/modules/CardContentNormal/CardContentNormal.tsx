type CardContentNormalProps = {
  title: string;
  content: string;
};

export const CardContentNormal = (props: CardContentNormalProps) => {
  const { title, content } = props;
  return (
    <>
      <ul className="flex h-auto flex-row items-center justify-between font-noto text-lg  text-pick-default">
        <li>{title}</li>
        <li>{content}</li>
      </ul>
    </>
  );
};
