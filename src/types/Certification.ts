export type CertificationsType = {
  certifications: CertificationType[];
};
export type CertificationType = {
  id: string;
  name: string;
  expiration?: Date;
};
