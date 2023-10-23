import { BiBuildings as AuthorityIcon, BiConversation as CertificationIcon, BiBook as SkillIcon, BiAlignLeft as SummaryIcon, BiUser as UserIcon } from 'react-icons/bi';

import { TabRouteItem } from '@/components/common/TabRouteItem/TabRouteItem';

type TabRouteProps = {
  value: string;
  onClick: (value: string) => void;
};

export const TabRoute = (props: TabRouteProps) => {
  const { value, onClick } = props;
  return (
    <div className="flex flex-row gap-2">
      <TabRouteItem Icon={SummaryIcon} text="一覧" isActive={value == '/'} onClick={() => onClick('summary')} />
      <TabRouteItem Icon={UserIcon} text="ユーザー" isActive={value.includes('user')} onClick={() => onClick('user')} />
      <TabRouteItem Icon={SkillIcon} text="スキル" isActive={value.includes('skill')} onClick={() => onClick('skill')} />
      <TabRouteItem Icon={AuthorityIcon} text="権限" isActive={value.includes('authority')} onClick={() => onClick('authority')} />
      <TabRouteItem Icon={CertificationIcon} text="資格" isActive={value.includes('certification')} onClick={() => onClick('certification')} />
    </div>
  );
};
