import { useForm } from 'react-hook-form';

import { FormItemSkill } from './FormItemSkill';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/FormItem/Skill',
  component: FormItemSkill,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormItemSkill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClickDelete: () => null,
    name: 'select',
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
