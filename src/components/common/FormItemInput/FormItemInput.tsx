import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

type FormItemInputValueProps = {
  title: string;
  disable?: boolean;
};

type FormItemInputProps<T extends FieldValues> = UseControllerProps<T> & FormItemInputValueProps;

export const FormItemInput = <T extends FieldValues>(props: FormItemInputProps<T>) => {
  const { disable, title, control, rules, name } = props;
  const { field } = useController<T>({ name, control, rules });
  return (
    <ul className="flex h-auto flex-row items-center justify-between font-noto text-lg  text-pick-default">
      <li>{title}</li>
      <li>
        <input type="input" disabled={disable} className="rounded border border-pick-sub py-3 px-4" value={field.value} onChange={field.onChange} />
      </li>
    </ul>
  );
};
