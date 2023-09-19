import { SearchResultComponentAuthority } from "./SearchResultComponentAuthority";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/SearchResultComponentAuthority",
    component: SearchResultComponentAuthority,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof SearchResultComponentAuthority>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
