import { useForm } from 'react-hook-form';

import { FormItemAuthority } from './FormItemAuthority';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/FormItem/Authority',
  component: FormItemAuthority,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormItemAuthority>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClickDelete: () => null,
    name: 'name',
  },
  render: function Comp({ ...args }) {
    // 関数コンポーネントを定義
    const { control } = useForm<{ name: string }>({
      defaultValues: {
        name: '1',
      },
    });
    return <meta.component {...args} control={control} name="name" rules={{}}></meta.component>;
  },
};
