import { CardContentSkills } from './CardContentSkills';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/CardContent/Skills',
  component: CardContentSkills,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardContentSkills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    skill: {
      name: 'プログラミング言語',
      id: 'xxx',
      level: 1,
    },
  },
};
