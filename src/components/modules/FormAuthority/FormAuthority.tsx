import { ArrayPath, FieldArray, FieldValues, Path, UseFieldArrayProps, useFieldArray } from 'react-hook-form';

import { Select, SelectItem } from '@tremor/react';

import { CardTitle } from '../CardTitle/CardTitle';
import { FormItemAuthority } from '../FormItemAuthority/FormItemAuthority';

type FormAuthorityProps<T extends FieldValues> = UseFieldArrayProps<T>;

export const FormAuthority = <T extends FieldValues>(props: FormAuthorityProps<T>) => {
  const { name, control, rules } = props;

  const { fields, remove, append } = useFieldArray<T>({ name, control, rules });

  const onChangeSelect = (value: string) => {
    append({ name: value } as FieldArray<T, ArrayPath<T>>);
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
            <FormItemAuthority key={field.id} control={control} name={`${name}.${index}.name` as Path<T>} onClickDelete={() => remove(index)} />
          ))}
        </div>
      </div>
    </>
  );
};
