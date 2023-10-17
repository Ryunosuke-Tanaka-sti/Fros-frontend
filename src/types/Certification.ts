export type CertificationsType = {
  certifications: CertificationType[];
};
type CertificationType = {
  id: string;
  name: string;
  expiration?: Date;
};
