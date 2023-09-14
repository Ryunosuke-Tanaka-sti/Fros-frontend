import { useForm } from 'react-hook-form';

import type { SkillsType } from '@/types/Skills';

import { FormSkills } from './FormSkills';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/Form/Skills',
  component: FormSkills,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormSkills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'skills',
  },
  render: function Comp({ ...args }) {
    // 関数コンポーネントを定義
    const { control } = useForm<SkillsType>({
      defaultValues: {
        skills: [
          {
            name: 'HTML',
            level: '1',
          },
        ],
      },
    });
    return <meta.component {...args} name="skills" control={control}></meta.component>;
  },
};
