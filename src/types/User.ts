import { PrivilegesType } from './Authority';
import { CertificationsType } from './Certification';
import { SkillsType } from './Skills';

export type UserInfoType = {
  id: string;
  name: string;
  image: string;
  email: string;
  service_line: string;
  fros_privilege: boolean;
};

export type ResponseUserType = {
  id: string;
  name: string;
  image: string;
  fros_privilege: string;
};

export type UserType = UserInfoType & SkillsType & CertificationsType & PrivilegesType;
