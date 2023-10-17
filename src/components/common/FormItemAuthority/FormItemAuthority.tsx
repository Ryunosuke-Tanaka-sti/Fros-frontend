import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import { AiOutlineClose } from 'react-icons/ai';

type FormItemAuthorityValueProps = {
  onClickDelete: () => void;
};
type FormItemAuthorityProps<T extends FieldValues> = UseControllerProps<T> & FormItemAuthorityValueProps;

export const FormItemAuthority = <T extends FieldValues>(props: FormItemAuthorityProps<T>) => {
  const { name, control, rules, onClickDelete } = props;
  const { field } = useController<T>({ name, control, rules });

  return (
    <>
      <div className="flex w-full flex-row items-center justify-between gap-3">
        <span className="text-lg">{field.value}</span>
        <AiOutlineClose className="h-6 w-6 hover:cursor-pointer" onClick={onClickDelete} />
      </div>
    </>
  );
};
