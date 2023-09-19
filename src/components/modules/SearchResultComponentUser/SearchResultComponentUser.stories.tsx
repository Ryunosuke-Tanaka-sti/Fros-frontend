import { SearchResultComponentUser } from './SearchResultComponentUser';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/SearchResultComponent/User',
  component: SearchResultComponentUser,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SearchResultComponentUser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'Tanaka Ryunosuke',
  },
};
