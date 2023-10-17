import { DividerComponent } from './Divider';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/General/Divider',
  component: DividerComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DividerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
