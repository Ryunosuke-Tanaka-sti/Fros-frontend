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
    skills: {
      skills: [
        {
          id: 'xxxxx',
          level: 1,
          name: 'HTML',
        },
      ],
    },
    skillsList: [
      {
        id: 'xxxxx',
        level: 1,
        name: 'HTML',
      },
      {
        id: 'yyyyy',
        level: 1,
        name: 'CSS',
      },
      {
        id: 'zzzzz',
        level: 1,
        name: 'React',
      },
    ],
    onSubmitSkills: () => null,
  },
};
