import { SearchCardSelect } from './SearchCardSelect';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/SearchCardSelect',
  component: SearchCardSelect,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SearchCardSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'タイトル',
    searchList: [
      { id: 'xxxx', name: 'test' },
      { id: 'yyyy', name: 'pick' },
    ],
    onClick: () => null,
  },
};
