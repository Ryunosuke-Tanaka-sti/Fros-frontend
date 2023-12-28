import { NameToID } from '@/types/Common';

export type PrivilegesType = {
  privileges: NameToID[];
};

export type PrivilegeType = {
  id: string;
  name: string;
};
