import { BiBuildings } from 'react-icons/bi';

import { TabRouteItem } from './TabRouteItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/TabRouteItem',
  component: TabRouteItem,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TabRouteItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    Icon: BiBuildings,
    isActive: true,
    text: '権限',
    onClick: () => null,
  },
};

export const NonActive: Story = {
  args: {
    Icon: BiBuildings,
    isActive: false,
    text: '権限',
    onClick: () => null,
  },
};
