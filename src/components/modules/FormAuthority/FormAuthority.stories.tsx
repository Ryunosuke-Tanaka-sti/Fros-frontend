import { FormAuthority } from '@/components/modules/FormAuthority/FormAuthority';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/Form/Authority',
  component: FormAuthority,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormAuthority>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    authorities: {
      authorities: [],
    },
    authoritiesList: [{ id: 'xxx', name: 'HTML' }],
    onSubmitAuthority: () => null,
  },
};
