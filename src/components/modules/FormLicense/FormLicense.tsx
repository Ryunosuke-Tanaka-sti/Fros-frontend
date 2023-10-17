import { ArrayPath, FieldArray, FieldValues, Path, UseFieldArrayProps, useFieldArray } from 'react-hook-form';

import { Select, SelectItem } from '@tremor/react';

import { CardTitle } from '@/components/common/CardTitle/CardTitle';
import { FormItemDate } from '@/components/common/FormItemDate/FormItemDate';
import { FormItemLabel } from '@/components/common/FormItemLabel/FormItemLabel';

type FormLicenseProps<T extends FieldValues> = UseFieldArrayProps<T>;
export const FormLicense = <T extends FieldValues>(props: FormLicenseProps<T>) => {
  const { name, control, rules } = props;

  const { fields, remove, append } = useFieldArray<T>({ name, control, rules });

  const onChangeSelect = (value: string) => {
    const appendData = { name: value, period: undefined } as FieldArray<T, ArrayPath<T>>;

    append(appendData);
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
              <FormItemLabel control={control} name={`${name}.${index}.name` as Path<T>} />
              <FormItemDate onClickDelete={() => remove(index)} control={control} name={`${name}.${index}.period` as Path<T>} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
