import { CardContentLicense } from './CardContentLicense';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/CardContent/License',
  component: CardContentLicense,
  tags: ['autodocs'],
  argTypes: {
    // period: {
    //   control: 'date',
    // },
    // Unixタイムが渡されるのでエラー
  },
} satisfies Meta<typeof CardContentLicense>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IndefinitePeriod: Story = {
  args: {
    title: '資格',
  },
};

export const HasPeriod: Story = {
  args: {
    title: '資格',
    period: new Date(),
  },
};
