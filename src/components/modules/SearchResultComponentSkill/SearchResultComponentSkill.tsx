import { SkillType } from '@/types/Skills';

import { CardContentSkills } from '../CardContentSkills/CardContentSkills';
import { CardContentTitle } from '../CardContentTitle/CardContentTitle';
import { DividerComponent } from '../Divider/Divider';

type SearchResultComponentSkillProps = {
  name: string;
  skill: SkillType;
};

export const SearchResultComponentSkill = (props: SearchResultComponentSkillProps) => {
  const { name, skill } = props;
  return (
    <div className="flex max-w-md flex-col gap-3 rounded-lg border-2 border-main-sub p-4">
      <CardContentTitle title={name} image="https://placehold.jp/150x150.png" />
      <DividerComponent />
      <CardContentSkills level={skill.level} name={skill.name} />
    </div>
  );
};
