import { useForm } from 'react-hook-form';

import { CertificationsType } from '@/types/Licenses';

import { FormLicense } from './FormLicense';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/Form/License',
  component: FormLicense,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormLicense>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
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
    return <meta.component {...args} control={control}></meta.component>;
  },
};
