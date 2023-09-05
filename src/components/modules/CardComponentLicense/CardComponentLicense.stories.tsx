import { CardComponentLicense } from './CardComponentLicense';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/CardComponentLicense',
  component: CardComponentLicense,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardComponentLicense>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    licenses: [
      { title: 'AZ-104', period: new Date() },
      { title: '応用情報' },
      { title: '基本情報' },
    ],
  },
};
