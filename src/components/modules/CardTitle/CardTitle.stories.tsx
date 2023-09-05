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

export const HasImage: Story = {
  args: {
    title: 'ブログアカウント発行',
    image: 'https://placehold.jp/150x150.png',
  },
};

export const NonImage: Story = {
  args: {
    title: 'ブログアカウント発行',
  },
};
