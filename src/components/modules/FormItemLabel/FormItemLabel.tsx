import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

type FormItemLabelProps<T extends FieldValues> = UseControllerProps<T>;

export const FormItemLabel = <T extends FieldValues>(props: FormItemLabelProps<T>) => {
  const { name, control } = props;
  const { field } = useController<T>({ name, control });

  return (
    <>
      <span className="text-lg">{field.value}</span>
    </>
  );
};
