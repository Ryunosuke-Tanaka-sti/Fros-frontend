import { NameToID } from '@/types/Common';

export type SkillsType = {
  skills: UserSkillType[];
};

type UserSkillType = NameToID & { level: number };

export type SkillType = {
  id: string;
  name: string;
  level: number;
};
