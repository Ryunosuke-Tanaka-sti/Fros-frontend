import { Table, TableBody } from '@tremor/react';

import { TableContent } from './TableContent';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/Table/Content',
  component: TableContent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TableContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    contents: ['Tanaka Ryunosuke', '1', '1', '2', '3', '4', '5', '6', '7', '90', '0', '3', '2', '32', '2', '3', '3', '23', '3', '1', '3', '2', '2', '3'],
  },
  render: function Comp({ ...args }) {
    return (
      <Table className="">
        <TableBody>
          <meta.component {...args} />
        </TableBody>
      </Table>
    );
  },
};
