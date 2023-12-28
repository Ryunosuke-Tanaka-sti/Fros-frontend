import { NameToID } from '@/types/Common';

export type CertificationsType = {
  certifications: UserCertificationType[];
};

type UserCertificationType = NameToID & { expiration?: string };

export type CertificationType = {
  id: string;
  name: string;
  expiration?: string;
};
