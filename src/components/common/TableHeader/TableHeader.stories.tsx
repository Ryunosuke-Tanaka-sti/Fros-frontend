import { Table } from '@tremor/react';

import { TableHeader } from './TableHeader';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/Table/Header',
  component: TableHeader,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    header: [
      '社員名',
      'HTML',
      'CSS',
      'React',
      'Vue',
      'Tailwind',
      'HTML',
      'CSS',
      'React',
      'Vue',
      'Tailwind',
      'HTML',
      'CSS',
      'React',
      'Vue',
      'Tailwind',
      'HTML',
      'CSS',
      'React',
      'HTML',
      'CSS',
      'React',
      'Vue',
      'Tailwind',
    ],
  },
  render: function Comp({ ...args }) {
    return (
      <Table className="">
        <meta.component {...args} />
      </Table>
    );
  },
};
