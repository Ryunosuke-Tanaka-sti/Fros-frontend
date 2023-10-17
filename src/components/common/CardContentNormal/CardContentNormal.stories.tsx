import { CardContentNormal } from './CardContentNormal';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/CardContent/Normal',
  component: CardContentNormal,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardContentNormal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: '名前',
    content: 'Tanaka Ryunosuke',
  },
};
