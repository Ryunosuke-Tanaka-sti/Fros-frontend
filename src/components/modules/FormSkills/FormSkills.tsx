import { Control, useFieldArray } from 'react-hook-form';

import { Select, SelectItem } from '@tremor/react';

import type { SkillsType } from '@/types/Skills';

import { CardTitle } from '../CardTitle/CardTitle';
import { FormItemLabel } from '../FormItemLabel/FormItemLabel';
import { FormItemSkill } from '../FormItemSkill/FormItemSkill';

type FormSkillsProps = {
  control?: Control<SkillsType>;
};

export const FormSkills = (props: FormSkillsProps) => {
  const name = 'skills';
  const { control } = props;

  const { fields, remove, append } = useFieldArray<SkillsType>({ name, control });

  const onChangeSelect = (value: string) => {
    append({ level: 1, name: value });
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
              <FormItemLabel control={control} name={`${name}.${index}.name`} />
              <FormItemSkill onClickDelete={() => remove(index)} control={control} name={`${name}.${index}.level`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
