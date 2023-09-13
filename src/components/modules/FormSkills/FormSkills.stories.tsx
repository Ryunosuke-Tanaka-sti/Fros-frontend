import { useForm } from 'react-hook-form';

import { FormSkills } from './FormSkills';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/FormSkills',
  component: FormSkills,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormSkills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClickDelete: () => null,
    name: 'selects',
  },
  render: function Comp({ ...args }) {
    // 関数コンポーネントを定義
    const { control } = useForm<{ selects: { label: string; select: string }[] }>({
      defaultValues: {
        selects: [
          {
            label: 'HTML',
            select: '1',
          },
        ],
      },
    });
    return <meta.component {...args} control={control} name="selects" rules={{}}></meta.component>;
  },
};
