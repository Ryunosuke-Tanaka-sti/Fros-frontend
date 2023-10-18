import { HeaderButton } from './HeaderButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/HeaderButton',
  component: HeaderButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HeaderButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    logo: 'human',
    text: 'マイページ',
    onClick: () => null,
  },
};
