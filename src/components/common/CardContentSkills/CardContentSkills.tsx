import { useMemo } from 'react';

import { MarkerBar } from '@tremor/react';

import { SkillType } from '@/types/Skills';

type CardContentSkillsType = {
  skill: SkillType;
};

export const CardContentSkills = (props: CardContentSkillsType) => {
  const { skill } = props;
  const { name, level } = skill;

  const rankRatio = useMemo(() => {
    switch (level) {
      case 1:
        return 0;
      case 2:
        return 33;
      case 3:
        return 66;
      case 4:
        return 100;
      default:
        return 0;
    }
  }, [level]);

  return (
    <>
      <div className="flex flex-col gap-3 p-2 font-noto  text-pick-default">
        <ul className="flex flex-row items-center justify-between text-lg">
          <li>{name}</li>
          <li>{level}</li>
        </ul>
        <MarkerBar value={rankRatio} color="blue" className="" />
      </div>
    </>
  );
};
