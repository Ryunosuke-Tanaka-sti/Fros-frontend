import { FieldValues, Path, UseFieldArrayProps, useFieldArray } from 'react-hook-form';

import { FormItemSkill } from '../FormItemSkill/FormItemSkill';

type FormSkillValueProps = {
  onClickDelete: () => void;
};
type FormSkillsProps<T extends FieldValues> = UseFieldArrayProps<T> & FormSkillValueProps;

export const FormSkills = <T extends FieldValues>(props: FormSkillsProps<T>) => {
  const { name, control, onClickDelete } = props;

  const { fields, remove } = useFieldArray<T>({ name, control });

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          {fields.map((field, index) => (
            <FormItemSkill key={field.id} label={'HTML'} onClickDelete={() => remove(index)} control={control} name={`${name}.${index}.select` as Path<T>} />
          ))}
        </div>
      </div>
    </>
  );
};
