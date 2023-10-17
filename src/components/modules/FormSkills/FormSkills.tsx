import { ArrayPath, FieldArray, FieldValues, Path, UseFieldArrayProps, useFieldArray } from 'react-hook-form';

import { Select, SelectItem } from '@tremor/react';

import { CardTitle } from '@/components/common/CardTitle/CardTitle';
import { FormItemLabel } from '@/components/common/FormItemLabel/FormItemLabel';
import { FormItemSkill } from '@/components/common/FormItemSkill/FormItemSkill';

type FormSkillsProps<T extends FieldValues> = UseFieldArrayProps<T>;

export const FormSkills = <T extends FieldValues>(props: FormSkillsProps<T>) => {
  const { name, control, rules } = props;

  const { fields, remove, append } = useFieldArray<T>({ name, control, rules });

  const onChangeSelect = (value: string) => {
    const appendData = { name: value, level: '1' } as FieldArray<T, ArrayPath<T>>;
    append(appendData);
  };

  return (
    <>
      <div className="flex flex-col gap-3 rounded-lg border-4 border-main-sub p-6">
        <CardTitle title="スキル" />
        <div className="h-0.5 w-full bg-pick-sub" />
        <ul className="gap-1 text-xs">
          <li>レベル4:最上級 新たな技術を開発できる</li>
          <li>レベル3:上級 作業を分析し改善・改良できる</li>
          <li>レベル2:中級 自律的に作業を遂行できる</li>
          <li>レベル1:初級 支援の下に作業を遂行できる</li>
        </ul>
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
              <FormItemSkill onClickDelete={() => remove(index)} control={control} name={`${name}.${index}.level` as Path<T>} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
