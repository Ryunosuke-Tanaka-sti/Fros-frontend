export type CertificationsType = {
  certifications: CertificationType[];
};
type CertificationType = {
  name: string;
  period?: Date;
};
