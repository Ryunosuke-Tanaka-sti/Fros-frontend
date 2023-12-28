import { useNavigate } from 'react-router-dom';

import { CardComponentAuthority } from '@/components/modules/CardComponentAuthority/CardComponentAuthority';
import { CardComponentCertification } from '@/components/modules/CardComponentCertification/CardComponentCertification';
import { CardComponentSkills } from '@/components/modules/CardComponentSkills/CardComponentSkills';
import { CardComponentUser } from '@/components/modules/CardComponentUser/CardComponentUser';
import { useAuth } from '@/hooks/useAuth';
import { useUser } from '@/hooks/useUser';
import { LoadingComponent } from '@/utilities/LoadingComponent';

export const OwnPage = () => {
  const navigate = useNavigate();
  const onClickEditPage = () => {
    navigate('/profile/edit');
  };

  const { uid } = useAuth();
  const { userData, isLoadingUserData } = useUser(uid);

  if (!userData && isLoadingUserData) return <LoadingComponent />;

  return (
    <div className="mx-7 my-5 flex w-full flex-row items-start justify-center gap-3">
      {userData ? (
        <>
          <CardComponentUser userInfo={userData} ownFlag={true} onClick={onClickEditPage} />
          <div className="flex max-w-3xl grow flex-col gap-9">
            <CardComponentSkills skills={userData.skills} />
            <CardComponentCertification certifications={userData.certifications} />
            <CardComponentAuthority privileges={userData.privileges} />
          </div>
        </>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

// const userInfo: UserInfoType = {
//   name: 'Tanaka Ryunosuke',
//   email: 'ry-tanaka@sios.com',
//   service_line: 'PS',
//   image: 'https://placehold.jp/150x150.png',
//   id: 'xxxxx',
//   fros_privilege: false,
// };

// const skills: SkillType[] = [
//   {
//     id: 'xxxx',
//     level: 1,
//     name: 'HTML',
//   },
//   {
//     id: 'yyyy',
//     level: 2,
//     name: 'CSS',
//   },
//   {
//     id: 'zzzz',
//     level: 4,
//     name: 'Tailwind',
//   },
// ];

// const authorities: NameToID[] = [
//   {
//     id: 'xxxx',
//     name: 'ブログアカウント発行',
//   },
//   {
//     id: 'yyyyy',
//     name: 'ブログアカウント発行',
//   },
// ];

// const certifications: CertificationType[] = [
//   { id: 'xxx', name: 'xxxx', expiration: new Date().toDateString() },
//   { id: 'xxx', name: 'ddddd' },
// ];
