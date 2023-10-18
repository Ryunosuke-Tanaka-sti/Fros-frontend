import { CardComponentUser } from './CardComponentUser';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/CardComponent/User',
  component: CardComponentUser,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardComponentUser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'Tanaka Ryunosuke',
    email: 'ry-tanaka@sios.com',
    service_line: 'PS',
    image: 'https://placehold.jp/150x150.png',
    id: 'xxxxx',
    isAdmin: false,
  },
};
