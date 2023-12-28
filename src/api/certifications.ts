import { NameToID } from '@/types/Common';
import { axiosClient } from '@/utilities/AxiosConfig';

export const readCertificationsData = async () => {
  const response = await axiosClient.get<NameToID[]>('/certifications');
  return response.data;
};
