import { NameToID } from '@/types/Common';

export type CertificationsType = {
  certifications: UserCertificationType[];
};

type UserCertificationType = NameToID & { expiration?: Date };

export type CertificationType = {
  id: string;
  name: string;
  expiration?: Date;
};
