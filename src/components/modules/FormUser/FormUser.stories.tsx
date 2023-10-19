import { FormUser } from "./FormUser";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/FormUser",
    component: FormUser,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof FormUser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
