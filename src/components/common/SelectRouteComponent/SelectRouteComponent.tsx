import { useMemo } from 'react';

import { Select, SelectItem } from '@tremor/react';
import { BiBuildings as AuthorityIcon, BiConversation as CertificationIcon, BiBook as SkillIcon, BiUser as UserIcon } from 'react-icons/bi';

type SelectRouteComponentProps = {
  value: string;
  onChangeValue: (value: string) => void;
};

export const SelectRouteComponent = (props: SelectRouteComponentProps) => {
  const { value, onChangeValue } = props;
  const selectIcon = useMemo(() => {
    if (value == 'user') return UserIcon;
    if (value == 'skill') return SkillIcon;
    if (value == 'authority') return AuthorityIcon;
    if (value == 'certification') return CertificationIcon;
  }, [value]);
  return (
    <Select className="w-32 text-xs" value={value} onValueChange={onChangeValue} icon={selectIcon} defaultValue="user">
      <SelectItem value="user" icon={UserIcon}>
        ユーザー
      </SelectItem>
      <SelectItem value="skill" icon={SkillIcon}>
        スキル
      </SelectItem>
      <SelectItem value="authority" icon={AuthorityIcon}>
        権限
      </SelectItem>
      <SelectItem value="certification" icon={CertificationIcon}>
        資格
      </SelectItem>
    </Select>
  );
};
