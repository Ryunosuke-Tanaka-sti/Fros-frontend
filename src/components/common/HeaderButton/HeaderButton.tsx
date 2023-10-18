type HeaderButtonProps = {
  text: string;
  logo: 'search' | 'human';
  onClick: () => void;
};

import { BiSearchAlt2, BiUser } from 'react-icons/bi';

export const HeaderButton = (props: HeaderButtonProps) => {
  const { text, logo, onClick } = props;
  const Icon = () => {
    if (logo == 'search') return <BiSearchAlt2 className="h-6 w-6" />;
    return <BiUser className="h-6 w-6" />;
  };
  return (
    <button className="flex h-14 w-40 flex-row items-center justify-center rounded border border-main-default text-lg font-bold text-main-default" onClick={onClick}>
      <Icon />
      {text}
    </button>
  );
};
