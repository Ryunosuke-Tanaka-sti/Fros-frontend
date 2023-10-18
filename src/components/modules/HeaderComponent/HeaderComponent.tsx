import FrosLogo from '@/assets/FrosLogo.png';
import { HeaderButton } from '@/components/common/HeaderButton/HeaderButton';

type HeaderComponentType = {
  onClickNavigate: (path: '/' | '/profile') => void;
};

export const HeaderComponent = (props: HeaderComponentType) => {
  const { onClickNavigate } = props;

  return (
    <header className="flex flex-row justify-between border-b border-pick-default px-8 py-6">
      <img src={FrosLogo} className="h-full w-auto object-contain" alt="" />
      <div className="flex flex-row gap-3">
        <HeaderButton logo="search" text="検索" onClick={() => onClickNavigate('/')} />
        <HeaderButton logo="human" text="マイページ" onClick={() => onClickNavigate('/profile')} />
      </div>
    </header>
  );
};
