import { AuthoritiesType } from './Authority';
import { CertificationsType } from './Certification';
import { SkillsType } from './Skills';

export type UserInfoType = {
  id: string;
  name: string;
  image: string;
  email: string;
  service_line: string;
  isAdmin: boolean;
};

export type UserType = UserInfoType & SkillsType & CertificationsType & AuthoritiesType;
