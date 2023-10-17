import { CardContentTitle } from './CardContentTitle';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/CardContent/Title',
  component: CardContentTitle,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardContentTitle>;

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
