import { CardContentSkills } from '../CardContentSkills/CardContentSkills';
import { CardContentTitle } from '../CardContentTitle/CardContentTitle';
import { DividerComponent } from '../Divider/Divider';

type SearchResultComponentSkillProps = {
  label?: string;
};

export const SearchResultComponentSkill = (props: SearchResultComponentSkillProps) => {
  const {} = props;
  return (
    <div className="flex max-w-md flex-col gap-3 rounded-lg border-2 border-main-sub p-4">
      <CardContentTitle title="Tanaka Ryunosuke" image="https://placehold.jp/150x150.png" />
      <DividerComponent />
      <CardContentSkills level="1" name="HTML" />
    </div>
  );
};
