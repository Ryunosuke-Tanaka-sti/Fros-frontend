import { CardComponentAuthority } from './CardComponentAuthority';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/CardComponentAuthority',
  component: CardComponentAuthority,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardComponentAuthority>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    authorityList: ['ブログアカウント発行', 'GitHubアカウント発行'],
  },
};
