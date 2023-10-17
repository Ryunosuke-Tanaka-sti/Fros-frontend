import { CardComponentCertification } from './CardComponentCertification';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/CardComponent/Certification',
  component: CardComponentCertification,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardComponentCertification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    certifications: [
      { id: 'xxx', name: 'xxxx', expiration: new Date() },
      { id: 'xxx', name: 'ddddd' },
    ],
  },
};
