import { SearchResultComponentSkill } from './SearchResultComponentSkill';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/SearchResultComponent/Skill',
  component: SearchResultComponentSkill,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SearchResultComponentSkill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'Tanaka Ryunosuke',
    skill: {
      name: 'HTML',
      level: '1',
    },
  },
};
