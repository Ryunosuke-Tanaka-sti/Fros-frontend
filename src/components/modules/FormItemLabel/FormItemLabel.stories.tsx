import { useForm } from 'react-hook-form';

import { FormItemLabel } from './FormItemLabel';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/FormItem/Label',
  component: FormItemLabel,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormItemLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'label',
  },
  render: function Comp({ ...args }) {
    // 関数コンポーネントを定義
    const { control } = useForm<{ label: string }>({
      defaultValues: {
        label: 'HTML',
      },
    });
    return <meta.component {...args} control={control} name="label" rules={{}}></meta.component>;
  },
};
