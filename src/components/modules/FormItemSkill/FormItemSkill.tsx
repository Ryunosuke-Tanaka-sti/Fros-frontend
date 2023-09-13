import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import { Select, SelectItem } from '@tremor/react';
import { AiOutlineClose } from 'react-icons/ai';

type FormItemSkillValueProps = {
  label: string;
  onClickDelete: () => void;
};
type FormItemSkillProps<T extends FieldValues> = UseControllerProps<T> & FormItemSkillValueProps;
export const FormItemSkill = <T extends FieldValues>(props: FormItemSkillProps<T>) => {
  const { label, name, control, rules, onClickDelete } = props;
  const { field } = useController<T>({ name, control, rules });

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <span className="text-lg">{label}</span>
        <div className="flex flex-row items-center gap-3">
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectItem value="1" />
            <SelectItem value="2" />
            <SelectItem value="3" />
            <SelectItem value="4" />
            <SelectItem value="5" />
          </Select>
          <AiOutlineClose className="h-6 w-6 hover:cursor-pointer" onClick={onClickDelete} />
        </div>
      </div>
    </>
  );
};
