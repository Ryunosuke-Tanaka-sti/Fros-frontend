type ButtonComponentProps = {
  text: string;
  onClick?: () => void;
  color: keyof typeof colorCode;
  disable?: boolean;
};

const colorCode = {
  main: 'bg-main-default',
  error: 'bg-error-default',
} as const satisfies Record<string, string>;

export const ButtonComponent = ({ text, color, onClick, disable = false }: ButtonComponentProps) => {
  return (
    <>
      <button onClick={onClick} className={'w-full max-w-sm font-noto text-xs py-2 text-white rounded ' + colorCode[color]} disabled={disable}>
        {text}
      </button>
    </>
  );
};
