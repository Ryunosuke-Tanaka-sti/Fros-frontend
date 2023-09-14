import { useForm } from 'react-hook-form';

import { AuthoritiesType } from '@/types/Authority';

import { FormAuthority } from './FormAuthority';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/Form/Authority',
  component: FormAuthority,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormAuthority>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'authorities',
  },
  render: function Comp({ ...args }) {
    // 関数コンポーネントを定義
    const { control } = useForm<AuthoritiesType>({
      defaultValues: {
        authorities: [],
      },
    });
    return <meta.component {...args} name="authorities" control={control}></meta.component>;
  },
};
