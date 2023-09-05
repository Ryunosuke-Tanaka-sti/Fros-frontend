import { CardTitle } from './CardTitle';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/CardContent/Title',
  component: CardTitle,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'ユーザー情報',
  },
};
