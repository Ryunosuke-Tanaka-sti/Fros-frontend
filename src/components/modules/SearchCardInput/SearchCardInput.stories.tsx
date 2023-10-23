import { SearchCardInput } from './SearchCardInput';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/SearchCardInput',
  component: SearchCardInput,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SearchCardInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'タイトル',
    onClick: (value) => console.log(value),
  },
};
