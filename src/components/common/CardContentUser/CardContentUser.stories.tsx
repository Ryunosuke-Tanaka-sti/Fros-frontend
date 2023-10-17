import { CardContentUser } from './CardContentUser';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/CardContent/User',
  component: CardContentUser,
  tags: ['autodocs'],
  argTypes: {
    image: {
      defaultValue: 'https://placehold.jp/150x150.png',
    },
  },
} satisfies Meta<typeof CardContentUser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    image: 'https://placehold.jp/150x150.png',
    name: 'Tanaka Ryunosuke',
  },
};
