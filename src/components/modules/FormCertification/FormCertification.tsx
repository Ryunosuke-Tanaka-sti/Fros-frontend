import { useMemo } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import { Select, SelectItem } from '@tremor/react';

import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';
import { CardTitle } from '@/components/common/CardTitle/CardTitle';
import { FormItemDate } from '@/components/common/FormItemDate/FormItemDate';
import { FormItemLabel } from '@/components/common/FormItemLabel/FormItemLabel';
import { CertificationType, CertificationsType } from '@/types/Certification';

type FormCertificationProps = {
  certifications: CertificationsType;
  onSubmitCertification: (authorities: CertificationsType) => void;
  certificationsList: CertificationType[];
};
export const FormCertification = (props: FormCertificationProps) => {
  const { certifications, certificationsList, onSubmitCertification } = props;
  const { control, handleSubmit, watch } = useForm<CertificationsType>({
    defaultValues: certifications,
  });
  const { fields, remove, append } = useFieldArray({ control, name: 'certifications' });
  const omitTargetList = watch('certifications').map((value) => value.id);
  const omitList = useMemo(() => certificationsList.filter((value) => !omitTargetList.includes(value.id)), [certificationsList, omitTargetList]);

  const onChangeSelect = (id: string) => {
    const target = certificationsList.find((value) => value.id == id);
    if (!target) return;
    append(target);
  };

  const onSubmit: SubmitHandler<CertificationsType> = async (data: CertificationsType) => {
    await onSubmitCertification(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 rounded-lg border-4 border-main-sub p-6">
        <CardTitle title="資格" />
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
            <div className="flex w-full flex-row items-center justify-between" key={field.id}>
              <FormItemLabel control={control} name={`certifications.${index}.name`} />
              <FormItemDate onClickDelete={() => remove(index)} control={control} name={`certifications.${index}.expiration`} />
            </div>
          ))}
        </div>
        <ButtonComponent color="main" text="更新" />
      </form>
    </>
  );
};
