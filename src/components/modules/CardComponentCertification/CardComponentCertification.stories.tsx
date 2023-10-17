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
    Certifications: [{ title: 'AZ-104', period: new Date() }, { title: '応用情報' }, { title: '基本情報' }],
  },
};
