import { CardTitle } from './CardTitle';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/General/Title',
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
