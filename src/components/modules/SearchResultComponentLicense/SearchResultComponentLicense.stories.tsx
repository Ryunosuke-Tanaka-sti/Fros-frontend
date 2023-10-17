import { SearchResultComponentCertification } from './SearchResultComponentLicense';

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
    Certification: 'AZ-104',
  },
};

export const HasPeriod: Story = {
  args: {
    name: 'Tanaka Ryunosuke',
    Certification: 'AZ-104',
    period: new Date(),
  },
};
