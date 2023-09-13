import { Control, useFieldArray } from 'react-hook-form';

import { Select, SelectItem } from '@tremor/react';

import { AuthoritiesType } from '@/types/Authority';

import { CardTitle } from '../CardTitle/CardTitle';
import { FormItemAuthority } from '../FormItemAuthority/FormItemAuthority';

type FormAuthorityProps = {
  control?: Control<AuthoritiesType>;
};

export const FormAuthority = (props: FormAuthorityProps) => {
  const { control } = props;

  const name = 'authorities';
  const { fields, remove, append } = useFieldArray<AuthoritiesType>({ name, control });

  const onChangeSelect = (value: string) => {
    append({ name: value });
  };
  return (
    <>
      <div className="flex flex-col gap-3 rounded-lg border-4 border-main-sub p-6">
        <CardTitle title="スキル" />
        <div className="h-0.5 w-full bg-pick-sub" />
        <Select onValueChange={onChangeSelect}>
          <SelectItem value="HTML" />
          <SelectItem value="CSS" />
          <SelectItem value="React" />
          <SelectItem value="Vue" />
        </Select>
        <div className="flex w-full flex-col items-center gap-3">
          {fields.map((field, index) => (
            <FormItemAuthority control={control} name={`${name}.${index}.name`} onClickDelete={() => remove(index)} />
          ))}
        </div>
      </div>
    </>
  );
};
