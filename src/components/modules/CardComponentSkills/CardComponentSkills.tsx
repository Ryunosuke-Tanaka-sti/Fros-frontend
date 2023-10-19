import { CardContentSkills } from '@/components/common/CardContentSkills/CardContentSkills';
import { CardTitle } from '@/components/common/CardTitle/CardTitle';
import { DividerComponent } from '@/components/common/Divider/Divider';
import { SkillsType } from '@/types/Skills';

export const CardComponentSkills = (props: SkillsType) => {
  const { skills } = props;
  return (
    <>
      <div className="flex flex-col gap-3 rounded-lg border-4 border-main-sub p-6">
        <CardTitle title="ユーザー情報" />
        <DividerComponent />
        <div className="flex flex-col gap-4">
          {skills.map((skill) => (
            <CardContentSkills key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </>
  );
};
