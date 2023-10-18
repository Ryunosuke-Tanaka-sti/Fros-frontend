import { CardComponentAuthority } from './CardComponentAuthority';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/CardComponent/Authority',
  component: CardComponentAuthority,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardComponentAuthority>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    authorities: [
      {
        id: 'xxxx',
        name: 'ブログアカウント発行',
      },
      {
        id: 'yyyyy',
        name: 'ブログアカウント発行',
      },
    ],
  },
};
