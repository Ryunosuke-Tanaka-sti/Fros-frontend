import { SearchResultComponentLicense } from "./SearchResultComponentLicense";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/SearchResultComponentLicense",
    component: SearchResultComponentLicense,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof SearchResultComponentLicense>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
