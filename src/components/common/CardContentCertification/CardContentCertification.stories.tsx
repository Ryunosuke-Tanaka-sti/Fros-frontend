import { CardContentCertification } from './CardContentCertification';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/CardContent/Certification',
  component: CardContentCertification,
  tags: ['autodocs'],
  argTypes: {
    // period: {
    //   control: 'date',
    // },
    // Unixタイムが渡されるのでエラー
  },
} satisfies Meta<typeof CardContentCertification>;

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
