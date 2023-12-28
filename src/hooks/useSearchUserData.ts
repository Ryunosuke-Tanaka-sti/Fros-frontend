import useSWR from 'swr';

import { ResponseUserType } from '@/types/User';

export const useSearchUsers = () => {
  const { data: searchUsersData, error, isLoading: isLoadingSearchUsersData, mutate } = useSWR<ResponseUserType[]>('searchUsers');
  return { searchUsersData, isLoadingSearchUsersData, error, mutate };
};

export const useSearchSkills = () => {
  const { data: searchSkillsData, error, isLoading: isLoadingSearchSkillsData, mutate } = useSWR<ResponseUserType[]>('searchSkills');
  return { searchSkillsData, isLoadingSearchSkillsData, error, mutate };
};

export const useSearchPrivileges = () => {
  const { data: searchPrivilegesData, error, isLoading: isLoadingSearchPrivileges, mutate } = useSWR<ResponseUserType[]>('searchPrivileges');
  return { searchPrivilegesData, isLoadingSearchPrivileges, error, mutate };
};

export const useSearchCertification = () => {
  const { data: searchCertificationsData, error, isLoading: isLoadingSearchCertifications, mutate } = useSWR<ResponseUserType[]>('searchCertifications');
  return { searchCertificationsData, isLoadingSearchCertifications, error, mutate };
};
