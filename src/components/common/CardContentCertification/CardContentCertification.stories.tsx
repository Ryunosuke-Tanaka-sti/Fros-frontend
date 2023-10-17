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
    certification: {
      id: 'xxx',
      name: 'title',
      expiration: new Date(),
    },
  },
};

export const HasPeriod: Story = {
  args: {
    certification: {
      id: 'xxx',
      name: 'title',
    },
  },
};
