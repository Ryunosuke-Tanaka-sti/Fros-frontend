import { SubmitHandler, useForm } from 'react-hook-form';

import { IoReloadSharp } from 'react-icons/io5';

import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';
import { CardTitle } from '@/components/common/CardTitle/CardTitle';
import { DividerComponent } from '@/components/common/Divider/Divider';
import { FormItemInput } from '@/components/common/FormItemInput/FormItemInput';
import { useAuth } from '@/hooks/useAuth';
import { UserInfoType } from '@/types/User';

type FormUserProps = {
  userInfo: UserInfoType;
  onSubmitUserInfo: (user: UserInfoType) => void;
};

export const FormUser = (props: FormUserProps) => {
  const { userInfo, onSubmitUserInfo } = props;
  const { image } = userInfo;
  const { user } = useAuth();
  const { control, handleSubmit, setValue, watch } = useForm<UserInfoType>({
    defaultValues: userInfo,
  });
  const imageFromImage = watch('image');

  const onClickSyncUserInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!user) return;
    setValue('image', user.photoURL || '');
    console.log(user);
  };

  const onSubmit: SubmitHandler<UserInfoType> = async (data: UserInfoType) => {
    await onSubmitUserInfo(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-96 flex-col items-center gap-3 rounded-lg border-4 border-main-sub p-3">
        <img src={imageFromImage || image} className="h-[300px] w-[300px] rounded-full object-contain" alt="" />
        <CardTitle title="ユーザー情報" />
        <DividerComponent />
        <div className="flex w-full flex-row justify-end ">
          <button className="flex flex-row items-center justify-center gap-2 rounded-sm bg-main-sub py-1 px-2 text-xs" onClick={onClickSyncUserInfo}>
            <IoReloadSharp />
            Googleで更新
          </button>
        </div>
        <div className="flex w-full flex-col gap-2">
          <FormItemInput disable={true} title="名前" name="name" control={control} rules={{}} />
          <FormItemInput disable={true} title="アドレス" name="email" control={control} rules={{}} />
          <FormItemInput title="所属SL" name="service_line" control={control} rules={{}} />
        </div>
        <ButtonComponent color="main" text="更新" />
      </form>
    </>
  );
};
