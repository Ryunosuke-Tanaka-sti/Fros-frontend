import { SearchResultComponentCertification } from './SearchResultComponentCertification';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/SearchResultComponent/Certification',
  component: SearchResultComponentCertification,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SearchResultComponentCertification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HasNotPeriod: Story = {
  args: {
    name: 'Tanaka Ryunosuke',
    certification: { id: 'xxx', name: 'wwww' },
  },
};

export const HasPeriod: Story = {
  args: {
    name: 'Tanaka Ryunosuke',
    certification: { id: 'xxx', name: 'wwww', expiration: new Date() },
  },
};
