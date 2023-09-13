import { TipsComponent } from './TipsComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/TipsComponent',
  component: TipsComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TipsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {},
};

export const NonActive: Story = {
  args: {
    active: false,
  },
};
