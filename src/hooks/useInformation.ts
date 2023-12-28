import useSWR from 'swr';

import { readCertificationsData } from '@/api/certifications';
import { readPrivilegesData } from '@/api/privileges';
import { readSkillsData } from '@/api/skills';

export const useSkillsInfo = () => {
  const { data: skillsData, error: errorSkills, isLoading: isLoadingSkillsData } = useSWR('skills', readSkillsData);
  return { skillsData, errorSkills, isLoadingSkillsData };
};

export const useCertificationsInfo = () => {
  const { data: certificationsData, error: errorCertifications, isLoading: isLoadingCertifications } = useSWR('certifications', readCertificationsData);
  return { certificationsData, errorCertifications, isLoadingCertifications };
};

export const usePrivilegesInfo = () => {
  const { data: privilegesData, error: errorPrivileges, isLoading: isLoadingPrivileges } = useSWR('authorities', readPrivilegesData);
  return { privilegesData, errorPrivileges, isLoadingPrivileges };
};
