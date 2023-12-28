import useSWR from 'swr';

import { readUserData } from '@/api/users';

export const useUser = (userID: string) => {
  const { data: userData, isLoading: isLoadingUserData, mutate } = useSWR('user', () => readUserData(userID));
  return { userData, isLoadingUserData, mutate };
};
