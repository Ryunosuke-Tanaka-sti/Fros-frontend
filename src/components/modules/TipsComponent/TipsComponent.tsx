type TipsComponentProps = {
  active?: boolean;
  onClick?: () => void;
};

export const TipsComponent = ({ active = true, onClick }: TipsComponentProps) => {
  const activeCssValue = {
    true: ' ',
    false: ' opacity-40',
  } as const satisfies Record<string, string>;

  return (
    <>
      <li
        onClick={onClick}
        className={
          'flex grow-0 justify-center items-center rounded-full border border-main-default px-3 py-1 text-main-default hover:cursor-pointer ' +
          (active ? activeCssValue['true'] : activeCssValue['false'])
        }
      >
        無制限
      </li>
    </>
  );
};
