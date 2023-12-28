import { ResponseUserType, UserType } from '@/types/User';
import { axiosClient } from '@/utilities/AxiosConfig';

export const readUserData = async (userID: string) => {
  const response = await axiosClient.get<UserType>(`/users/${userID}`);
  return response.data;
};

export const updateUserData = async (userData: UserType) => {
  await axiosClient.put('/users', userData);
};

export const updateUserSkillData = async (userID: string, skills: { id: string; level: number }[]) => {
  await axiosClient.put('/users/skills/', { id: userID, skills: skills });
};

export const updateUserPrivilegeData = async (userID: string, privileges: { id: string }[]) => {
  await axiosClient.put('/users/privileges/', { id: userID, privileges: privileges });
};

export const updateUserCertificationData = async (userID: string, certifications: { id: string }[]) => {
  await axiosClient.put('/users/certifications/', { id: userID, certifications: certifications });
};

export const registerUserData = async (userData: UserType) => {
  await axiosClient.post('/users', userData);
};

export const readSearchSkillsData = async (skillID: string) => {
  const response = await axiosClient.get<ResponseUserType[]>(`/users/search/skills/${skillID}`);
  return response.data;
};

export const readSearchCertificationsData = async (certificationsID: string) => {
  const response = await axiosClient.get<ResponseUserType[]>(`/users/search/certifications/${certificationsID}`);
  return response.data;
};

export const readSearchPrivilegesData = async (privilegesID: string) => {
  const response = await axiosClient.get<ResponseUserType[]>(`/users/search/privileges/${privilegesID}`);
  return response.data;
};

export const readSearchUsersData = async (userName: string) => {
  const response = await axiosClient.get<ResponseUserType[]>(`/users/search/name/${userName}`);
  return response.data;
};
