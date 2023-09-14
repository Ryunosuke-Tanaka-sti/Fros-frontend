import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import { DatePicker } from '@tremor/react';
import { AiOutlineClose } from 'react-icons/ai';

import { TipsComponent } from '../TipsComponent/TipsComponent';

type FormItemDateValueProps = {
  onClickDelete: () => void;
};
type FormItemDateProps<T extends FieldValues> = UseControllerProps<T> & FormItemDateValueProps;

export const FormItemDate = <T extends FieldValues>(props: FormItemDateProps<T>) => {
  const { name, control, rules, onClickDelete } = props;
  const { field } = useController<T>({ name, control, rules });
  return (
    <>
      <div className="flex flex-row items-center justify-start gap-3">
        <TipsComponent active={!field.value} onClick={() => field.onChange(null)} />
        <DatePicker value={field.value} onValueChange={field.onChange} className="w-16" />
        <AiOutlineClose className="h-6 w-6 hover:cursor-pointer" onClick={onClickDelete} />
      </div>
    </>
  );
};
