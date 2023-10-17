import { TableComponent } from "./TableComponent";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/TableComponent",
    component: TableComponent,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof TableComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
