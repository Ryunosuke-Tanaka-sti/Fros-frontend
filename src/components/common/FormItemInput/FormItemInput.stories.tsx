import { useForm } from 'react-hook-form';

import { FormItemInput } from './FormItemInput';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/FormItemInput',
  component: FormItemInput,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormItemInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'select',
    title: 'select',
  },
  render: function Comp({ ...args }) {
    // 関数コンポーネントを定義
    const { control } = useForm<{ select: string }>({
      defaultValues: {
        select: '1',
      },
    });
    return <meta.component {...args} control={control} name="select" rules={{}}></meta.component>;
  },
};
