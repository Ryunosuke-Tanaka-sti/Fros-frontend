import { ButtonComponent } from './ButtonComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/General/ButtonComponent',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    text: '検索',
    color: 'main',
  },
};

export const Error: Story = {
  args: {
    text: '検索',
    color: 'error',
    disable: true,
  },
};
