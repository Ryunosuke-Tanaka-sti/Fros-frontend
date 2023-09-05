import { CardContentSkills } from '../CardContentSkills/CardContentSkills';
import { CardTitle } from '../CardTitle/CardTitle';

type CardComponentSkillsProps = {
  skills: { title: string; rank: 1 | 2 | 3 | 4 }[];
};

export const CardComponentSkills = (props: CardComponentSkillsProps) => {
  const { skills } = props;
  return (
    <>
      <div className="flex flex-col gap-3 rounded-lg border-4 border-main-sub p-6">
        <CardTitle title="ユーザー情報" />
        <div className="h-0.5 w-full bg-pick-sub" />
        <div className="flex flex-col gap-4">
          {skills.map((skill) => (
            <CardContentSkills key={skill.title} title={skill.title} rank={skill.rank} />
          ))}
        </div>
      </div>
    </>
  );
};
