import { CardContentSkills } from '@/components/common/CardContentSkills/CardContentSkills';
import { CardContentTitle } from '@/components/common/CardContentTitle/CardContentTitle';
import { DividerComponent } from '@/components/common/Divider/Divider';
import { SkillType } from '@/types/Skills';

type SearchResultComponentSkillProps = {
  name: string;
  skill: SkillType;
};

export const SearchResultComponentSkill = (props: SearchResultComponentSkillProps) => {
  const { name, skill } = props;
  return (
    <div className="flex w-full max-w-md flex-col gap-3 rounded-lg border-2 border-main-sub p-4">
      <CardContentTitle title={name} image="https://placehold.jp/150x150.png" />
      <DividerComponent />
      <CardContentSkills skill={skill} />
    </div>
  );
};
