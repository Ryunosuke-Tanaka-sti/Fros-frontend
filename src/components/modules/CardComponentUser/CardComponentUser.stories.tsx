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
    mail: 'ry-tanaka@sios.com',
    affiliation: 'PS',
  },
};
