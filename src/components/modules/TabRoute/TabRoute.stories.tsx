import { TabRoute } from './TabRoute';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/TabRoute',
  component: TabRoute,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TabRoute>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: '/',
    onClick: () => null,
  },
};
