import { IconType } from 'react-icons';

type TabRouteItemProps = {
  text: string;
  Icon: IconType;
  onClick: () => void;
  isActive: boolean;
};

export const TabRouteItem = (props: TabRouteItemProps) => {
  const { text, Icon, onClick, isActive } = props;
  const activeCSS = {
    true: 'text-main-default',
    false: 'text-main-sub',
  } as const satisfies Record<string, string>;
  return (
    <div className={'flex flex-row gap-1 items-end hover:cursor-pointer ' + (isActive ? activeCSS['true'] : activeCSS['false'])} onClick={onClick}>
      <Icon className="h-9 w-9" />
      <span className="text-lg">{text}</span>
    </div>
  );
};
