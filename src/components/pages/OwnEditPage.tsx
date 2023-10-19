import { FormAuthority } from '@/components/modules/FormAuthority/FormAuthority';
import { FormCertification } from '@/components/modules/FormCertification/FormCertification';
import { FormSkills } from '@/components/modules/FormSkills/FormSkills';
import { FormUser } from '@/components/modules/FormUser/FormUser';
import { AuthoritiesType, AuthorityType } from '@/types/Authority';
import { CertificationType, CertificationsType } from '@/types/Certification';
import { SkillType, SkillsType } from '@/types/Skills';
import { UserInfoType } from '@/types/User';

export const OwnEditPage = () => {
  const userInfo: UserInfoType = {
    name: 'Tanaka Ryunosuke',
    email: 'ry-tanaka@sios.com',
    service_line: 'PS',
    image: 'https://placehold.jp/150x150.png',
    id: 'xxxxx',
    isAdmin: false,
  };
  const authorities: AuthoritiesType = {
    authorities: [{ id: 'xxx', name: 'HTML' }],
  };
  const authoritiesList: AuthorityType[] = [
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
      <FormUser userInfo={userInfo} onSubmitUserInfo={() => null} />
      <div className="flex max-w-3xl grow flex-col gap-9">
        <FormSkills skills={skills} skillsList={skillsList} onSubmitSkills={() => null} />
        <FormCertification certifications={certifications} certificationsList={certificationsList} onSubmitCertification={() => null} />
        <FormAuthority authorities={authorities} authoritiesList={authoritiesList} onSubmitAuthority={() => null} />
      </div>
    </div>
  );
};
