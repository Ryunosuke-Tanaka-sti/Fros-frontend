import { CardContentSkills } from './CardContentSkills';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/CardContent/Skills',
  component: CardContentSkills,
  tags: ['autodocs'],
  argTypes: {
    rank: {
      control: 'select',
      options: [1, 2, 3, 4],
    },
  },
} satisfies Meta<typeof CardContentSkills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    rank: 1,
    title: 'プログラミング言語',
  },
};
