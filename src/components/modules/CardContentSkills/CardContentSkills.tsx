import { useMemo } from 'react';

import { MarkerBar } from '@tremor/react';

type CardContentSkillsProps = {
  title: string;
  rank: 1 | 2 | 3 | 4;
};

export const CardContentSkills = (props: CardContentSkillsProps) => {
  const { title, rank } = props;

  const rankRatio = useMemo(() => {
    switch (rank) {
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
  }, [rank]);

  return (
    <>
      <div className="flex flex-col gap-3 p-2 font-noto  text-pick-default">
        <ul className="flex flex-row items-center justify-between text-lg">
          <li>{title}</li>
          <li>{rank}</li>
        </ul>
        <MarkerBar value={rankRatio} color="blue" className="" />
      </div>
    </>
  );
};
