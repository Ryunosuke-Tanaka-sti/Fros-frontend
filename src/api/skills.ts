import { NameToID } from '@/types/Common';
import { axiosClient } from '@/utilities/AxiosConfig';

export const readSkillsData = async () => {
  const response = await axiosClient.get<NameToID[]>('/skills');
  return response.data;
};
