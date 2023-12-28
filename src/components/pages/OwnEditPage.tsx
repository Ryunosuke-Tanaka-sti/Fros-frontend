import { FormCertification } from '@/components/modules/FormCertification/FormCertification';
import { FormPrivileges } from '@/components/modules/FormPrivileges/FormPrivileges';
import { FormSkills } from '@/components/modules/FormSkills/FormSkills';
import { FormUser } from '@/components/modules/FormUser/FormUser';
import { useAuth } from '@/hooks/useAuth';
import { useCertificationsInfo, usePrivilegesInfo, useSkillsInfo } from '@/hooks/useInformation';
import { useUser } from '@/hooks/useUser';
import { PrivilegesType } from '@/types/Authority';
import { CertificationType, CertificationsType } from '@/types/Certification';
import { NameToID } from '@/types/Common';
import { SkillType, SkillsType } from '@/types/Skills';
import { UserInfoType } from '@/types/User';
import { LoadingComponent } from '@/utilities/LoadingComponent';

export const OwnEditPage = () => {
  const { uid } = useAuth();
  const { userData, isLoadingUserData, mutate } = useUser(uid);

  const { skillsData, isLoadingSkillsData } = useSkillsInfo();
  const { certificationsData, isLoadingCertifications } = useCertificationsInfo();
  const { privilegesData, isLoadingPrivileges } = usePrivilegesInfo();

  if (!userData && isLoadingUserData) return <LoadingComponent />;
  if (!skillsData && isLoadingSkillsData) return <LoadingComponent />;
  if (!certificationsData && isLoadingCertifications) return <LoadingComponent />;
  if (!privilegesData && isLoadingPrivileges) return <LoadingComponent />;

  const userInfo: UserInfoType = {
    name: 'Tanaka Ryunosuke',
    email: 'ry-tanaka@sios.com',
    service_line: 'PS',
    image: 'https://placehold.jp/150x150.png',
    id: 'xxxxx',
    fros_privilege: false,
  };
  const authorities: PrivilegesType = {
    privileges: [{ id: 'xxx', name: 'HTML' }],
  };
  const authoritiesList: NameToID[] = [
    { id: 'xxx', name: 'HTML' },
    { id: 'yyy', name: 'HTML' },
    { id: 'zzz', name: 'HTML' },
  ];

  const certifications: CertificationsType = {
    certifications: [
      {
        id: 'xxxx',
        name: 'HTML',
      },
    ],
  };
  const certificationsList: CertificationType[] = [
    {
      id: 'xxxx',
      name: 'HTML',
    },
    {
      id: 'yyyy',
      name: 'HTML',
    },
    {
      id: 'zzzzz',
      name: 'HTML',
    },
    {
      id: 'dddd',
      name: 'HTML',
    },
  ];

  const skills: SkillsType = {
    skills: [
      {
        id: 'xxxxx',
        level: 1,
        name: 'HTML',
      },
    ],
  };
  const skillsList: SkillType[] = [
    {
      id: 'xxxxx',
      level: 1,
      name: 'HTML',
    },
    {
      id: 'yyyyy',
      level: 1,
      name: 'CSS',
    },
    {
      id: 'zzzzz',
      level: 1,
      name: 'React',
    },
  ];

  return (
    <div className="mx-7 my-5 flex w-full flex-row items-start justify-center gap-3">
      {userData && privilegesData && skillsData && certificationsData ? (
        <>
          <FormUser userInfo={userData} onSubmitUserInfo={() => null} />
          <div className="flex max-w-3xl grow flex-col gap-9">
            <FormSkills skills={userData} skillsList={skillsData} onSubmitSkills={() => null} />
            <FormCertification certifications={userData} certificationsList={certificationsData} onSubmitCertification={() => null} />
            <FormPrivileges privileges={userData} privilegesList={privilegesData} onSubmitAuthority={() => null} />
          </div>
        </>
      ) : (
        <FormUser userInfo={userInfo} onSubmitUserInfo={() => null} />
      )}
    </div>
  );
};
