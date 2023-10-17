import { useForm } from 'react-hook-form';

import { FormItemDate } from './FormItemDate';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/FormItem/Date',
  component: FormItemDate,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormItemDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClickDelete: () => null,
    name: 'date',
  },
  render: function Comp({ ...args }) {
    // 関数コンポーネントを定義
    const { control } = useForm<{ date: Date }>({
      defaultValues: {
        date: new Date(),
      },
    });
    return <meta.component {...args} control={control} name="date" rules={{}}></meta.component>;
  },
};
