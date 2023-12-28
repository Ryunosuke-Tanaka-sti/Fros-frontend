import { useMemo } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import { Select, SelectItem } from '@tremor/react';

import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';
import { CardTitle } from '@/components/common/CardTitle/CardTitle';
import { FormItemLabel } from '@/components/common/FormItemLabel/FormItemLabel';
import { FormItemSkill } from '@/components/common/FormItemSkill/FormItemSkill';
import { NameToID } from '@/types/Common';
import { SkillsType } from '@/types/Skills';

type FormSkillsProps = {
  skills: SkillsType;
  onSubmitSkills: (skills: SkillsType) => void;
  skillsList: NameToID[];
};

export const FormSkills = (props: FormSkillsProps) => {
  const { onSubmitSkills, skills, skillsList } = props;

  const { control, handleSubmit, watch } = useForm<SkillsType>({
    defaultValues: skills,
  });
  const { fields, remove, append } = useFieldArray({ name: 'skills', control });
  const omitTargetList = watch('skills').map((value) => value.id);
  const omitList = useMemo(() => skillsList.filter((value) => !omitTargetList.includes(value.id)), [skillsList, omitTargetList]);

  const onChangeSelect = (id: string) => {
    const target = skillsList.find((value) => value.id == id);
    if (!target) return;

    append({ ...target, level: 1 });
  };
  const onSubmit: SubmitHandler<SkillsType> = async (data: SkillsType) => {
    await onSubmitSkills(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 rounded-lg border-4 border-main-sub p-6">
        <CardTitle title="スキル" />
        <div className="h-0.5 w-full bg-pick-sub" />
        <ul className="gap-1 text-xs">
          <li>レベル4:最上級 新たな技術を開発できる</li>
          <li>レベル3:上級 作業を分析し改善・改良できる</li>
          <li>レベル2:中級 自律的に作業を遂行できる</li>
          <li>レベル1:初級 支援の下に作業を遂行できる</li>
        </ul>
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
              <FormItemLabel control={control} name={`skills.${index}.name`} />
              <FormItemSkill onClickDelete={() => remove(index)} control={control} name={`skills.${index}.level`} />
            </div>
          ))}
        </div>
        <ButtonComponent color="main" text="更新" />
      </form>
    </>
  );
};
