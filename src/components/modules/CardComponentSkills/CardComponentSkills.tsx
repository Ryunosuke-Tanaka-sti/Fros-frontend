import { SkillsType } from '@/types/Skills';

import { CardContentSkills } from '../CardContentSkills/CardContentSkills';
import { CardTitle } from '../CardTitle/CardTitle';

export const CardComponentSkills = (props: SkillsType) => {
  const { skills } = props;
  return (
    <>
      <div className="flex flex-col gap-3 rounded-lg border-4 border-main-sub p-6">
        <CardTitle title="ユーザー情報" />
        <div className="h-0.5 w-full bg-pick-sub" />
        <div className="flex flex-col gap-4">
          {skills.map((skill, index) => (
            <CardContentSkills key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </>
  );
};
