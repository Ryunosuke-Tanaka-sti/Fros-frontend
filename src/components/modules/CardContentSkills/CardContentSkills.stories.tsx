import { CardContentSkills } from './CardContentSkills';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/CardContent/Skills',
  component: CardContentSkills,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4],
    },
  },
} satisfies Meta<typeof CardContentSkills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    level: 1,
    name: 'プログラミング言語',
  },
};
