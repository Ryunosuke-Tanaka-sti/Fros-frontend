import { SearchResultComponentLicense } from './SearchResultComponentLicense';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/SearchResultComponent/License',
  component: SearchResultComponentLicense,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SearchResultComponentLicense>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HasNotPeriod: Story = {
  args: {
    name: 'Tanaka Ryunosuke',
    license: 'AZ-104',
  },
};

export const HasPeriod: Story = {
  args: {
    name: 'Tanaka Ryunosuke',
    license: 'AZ-104',
    period: new Date(),
  },
};
