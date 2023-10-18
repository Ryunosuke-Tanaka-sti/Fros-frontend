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
        id: 'xxxx',
        level: 1,
        name: 'HTML',
      },
      {
        id: 'yyyy',
        level: 2,
        name: 'CSS',
      },
      {
        id: 'zzzz',
        level: 4,
        name: 'Tailwind',
      },
    ],
  },
};
