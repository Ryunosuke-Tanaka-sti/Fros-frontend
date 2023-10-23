import { NameToID } from '@/types/Common';

export type AuthoritiesType = {
  authorities: NameToID[];
};

export type AuthorityType = {
  id: string;
  name: string;
};
