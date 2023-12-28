import { FormPrivileges } from '@/components/modules/FormPrivileges/FormPrivileges';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/Form/Authority',
  component: FormPrivileges,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormPrivileges>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    privileges: {
      privileges: [],
    },
    privilegesList: [{ id: 'xxx', name: 'HTML' }],
    onSubmitAuthority: () => null,
  },
};
