import { useForm } from 'react-hook-form';

import { CertificationsType } from '@/types/Certification';

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
    name: 'certifications',
  },
  render: function Comp({ ...args }) {
    // 関数コンポーネントを定義
    const { control } = useForm<CertificationsType>({
      defaultValues: {
        certifications: [
          {
            name: 'HTML',
          },
        ],
      },
    });
    return <meta.component {...args} name="certifications" control={control}></meta.component>;
  },
};
