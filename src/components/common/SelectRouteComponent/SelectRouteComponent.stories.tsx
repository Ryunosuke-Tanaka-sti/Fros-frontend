import { SelectRouteComponent } from './SelectRouteComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/SelectRouteComponent',
  component: SelectRouteComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SelectRouteComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: 'user',
    onChangeValue: (value: string) => console.log(value),
  },
};
