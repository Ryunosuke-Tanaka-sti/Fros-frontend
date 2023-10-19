import { FormCertification } from './FormCertification';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/Form/Certification',
  component: FormCertification,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormCertification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    certifications: {
      certifications: [
        {
          id: 'xxxx',
          name: 'HTML',
        },
      ],
    },
    certificationsList: [
      {
        id: 'xxxx',
        name: 'HTML',
      },
      {
        id: 'xxxx',
        name: 'HTML',
      },
      {
        id: 'xxxx',
        name: 'HTML',
      },
      {
        id: 'xxxx',
        name: 'HTML',
      },
    ],
    onSubmitCertification: () => null,
  },
};
