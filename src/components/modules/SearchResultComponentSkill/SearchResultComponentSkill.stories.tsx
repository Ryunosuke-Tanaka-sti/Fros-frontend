import { SearchResultComponentSkill } from "./SearchResultComponentSkill";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/SearchResultComponentSkill",
    component: SearchResultComponentSkill,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof SearchResultComponentSkill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
