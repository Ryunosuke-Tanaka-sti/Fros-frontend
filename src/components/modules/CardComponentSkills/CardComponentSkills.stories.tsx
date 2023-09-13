import { CardComponentSkills } from './CardComponentSkills';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/CardComponent/Skills',
  component: CardComponentSkills,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardComponentSkills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    skills: [
      {
        level: 1,
        name: 'HTML',
      },
      {
        level: 2,
        name: 'CSS',
      },
      {
        level: 4,
        name: 'Tailwind',
      },
    ],
  },
};
