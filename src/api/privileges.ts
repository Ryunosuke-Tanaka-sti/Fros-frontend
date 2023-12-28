import { NameToID } from '@/types/Common';
import { axiosClient } from '@/utilities/AxiosConfig';

export const readPrivilegesData = async () => {
  const response = await axiosClient.get<NameToID[]>('/privileges');
  return response.data;
};
