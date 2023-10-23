import { useNavigate } from 'react-router-dom';

import { CardComponentAuthority } from '@/components/modules/CardComponentAuthority/CardComponentAuthority';
import { CardComponentCertification } from '@/components/modules/CardComponentCertification/CardComponentCertification';
import { CardComponentSkills } from '@/components/modules/CardComponentSkills/CardComponentSkills';
import { CardComponentUser } from '@/components/modules/CardComponentUser/CardComponentUser';
import { CertificationType } from '@/types/Certification';
import { NameToID } from '@/types/Common';
import { SkillType } from '@/types/Skills';
import { UserInfoType } from '@/types/User';

export const OwnPage = () => {
  const navigate = useNavigate();
  const onClickEditPage = () => {
    navigate('/profile/edit');
  };

  const userInfo: UserInfoType = {
    name: 'Tanaka Ryunosuke',
    email: 'ry-tanaka@sios.com',
    service_line: 'PS',
    image: 'https://placehold.jp/150x150.png',
    id: 'xxxxx',
    isAdmin: false,
  };

  const skills: SkillType[] = [
    {
      id: 'xxxx',
      level: 1,
      name: 'HTML',
    },
    {
      id: 'yyyy',
      level: 2,
      name: 'CSS',
    },
    {
      id: 'zzzz',
      level: 4,
      name: 'Tailwind',
    },
  ];

  const authorities: NameToID[] = [
    {
      id: 'xxxx',
      name: 'ブログアカウント発行',
    },
    {
      id: 'yyyyy',
      name: 'ブログアカウント発行',
    },
  ];

  const certifications: CertificationType[] = [
    { id: 'xxx', name: 'xxxx', expiration: new Date() },
    { id: 'xxx', name: 'ddddd' },
  ];

  return (
    <div className="mx-7 my-5 flex w-full flex-row items-start justify-center gap-3">
      <CardComponentUser userInfo={userInfo} ownFlag={true} onClick={onClickEditPage} />
      <div className="flex max-w-3xl grow flex-col gap-9">
        <CardComponentSkills skills={skills} />
        <CardComponentCertification certifications={certifications} />
        <CardComponentAuthority authorities={authorities} />
      </div>
    </div>
  );
};
