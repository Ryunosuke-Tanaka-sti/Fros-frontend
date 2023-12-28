import { NameToID } from '@/types/Common';
import { axiosClient } from '@/utilities/AxiosConfig';

export const readSLData = async () => {
  const response = await axiosClient.get<NameToID>('/servicelines');
  return response.data;
};
