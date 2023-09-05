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
        rank: 1,
        title: 'HTML',
      },
      {
        rank: 2,
        title: 'CSS',
      },
      {
        rank: 4,
        title: 'Tailwind',
      },
    ],
  },
};
