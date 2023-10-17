import { AuthorityType } from './Authority';
import { CertificationType } from './Certification';
import { SkillType } from './Skills';

export type UserInfoType = {
  id: string;
  name: string;
  image: string;
  email: string;
  service_line: string;
  isAdmin: boolean;
};

export type UserType = {
  info: UserInfoType;
  skills: SkillType[];
  certification: CertificationType[];
  authorities: AuthorityType[];
};
