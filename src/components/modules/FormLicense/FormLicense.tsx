import { Control, useFieldArray } from 'react-hook-form';

import { Select, SelectItem } from '@tremor/react';

import { CertificationsType } from '@/types/Licenses';

import { CardTitle } from '../CardTitle/CardTitle';
import { FormItemDate } from '../FormItemDate/FormItemDate';
import { FormItemLabel } from '../FormItemLabel/FormItemLabel';

type FormLicenseProps = {
  control?: Control<CertificationsType>;
};

export const FormLicense = (props: FormLicenseProps) => {
  const name = 'certifications';
  const { control } = props;

  const { fields, remove, append } = useFieldArray<CertificationsType>({ name, control });

  const onChangeSelect = (value: string) => {
    append({ name: value, period: undefined });
  };

  return (
    <>
      <div className="flex flex-col gap-3 rounded-lg border-4 border-main-sub p-6">
        <CardTitle title="資格" />
        <div className="h-0.5 w-full bg-pick-sub" />
        <Select onValueChange={onChangeSelect}>
          <SelectItem value="HTML" />
          <SelectItem value="CSS" />
          <SelectItem value="React" />
          <SelectItem value="Vue" />
        </Select>
        <div className="flex w-full flex-col items-center gap-3">
          {fields.map((field, index) => (
            <div className="flex w-full flex-row items-center justify-between" key={field.id}>
              <FormItemLabel control={control} name={`${name}.${index}.name`} />
              <FormItemDate onClickDelete={() => remove(index)} control={control} name={`${name}.${index}.period`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
