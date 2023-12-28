import { useMemo } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import { Select, SelectItem } from '@tremor/react';

import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';
import { CardTitle } from '@/components/common/CardTitle/CardTitle';
import { FormItemAuthority } from '@/components/common/FormItemAuthority/FormItemAuthority';
import { PrivilegesType } from '@/types/Authority';
import { NameToID } from '@/types/Common';

type FormPrivilegesProps = {
  privileges: PrivilegesType;
  onSubmitAuthority: (authorities: PrivilegesType) => void;
  privilegesList: NameToID[];
};

export const FormPrivileges = (props: FormPrivilegesProps) => {
  const { privileges: authorities, onSubmitAuthority, privilegesList: authoritiesList } = props;

  const { control, handleSubmit, watch } = useForm<PrivilegesType>({
    defaultValues: authorities,
  });
  const { fields, remove, append } = useFieldArray({ control, name: 'privileges' });
  const omitTargetList = watch('privileges').map((value) => value.id);
  const omitList = useMemo(() => authoritiesList.filter((value) => !omitTargetList.includes(value.id)), [authoritiesList, omitTargetList]);

  const onChangeSelect = (id: string) => {
    const target = authoritiesList.find((value) => value.id == id);
    if (!target) return;
    append(target);
  };
  const onSubmit: SubmitHandler<PrivilegesType> = async (data: PrivilegesType) => {
    await onSubmitAuthority(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 rounded-lg border-4 border-main-sub p-6">
        <CardTitle title="権限" />
        <div className="h-0.5 w-full bg-pick-sub" />
        <Select onValueChange={onChangeSelect}>
          {omitList.map((value) => (
            <SelectItem key={value.id} value={value.id}>
              {value.name}
            </SelectItem>
          ))}
        </Select>
        <div className="flex w-full flex-col items-center gap-3">
          {fields.map((field, index) => (
            <FormItemAuthority key={field.id} control={control} name={`privileges.${index}.name`} onClickDelete={() => remove(index)} />
          ))}
        </div>
        <ButtonComponent color="main" text="更新" />
      </form>
    </>
  );
};
