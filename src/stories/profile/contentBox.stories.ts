import type { Meta, StoryObj } from "@storybook/react";
import { ContentBox } from "./ContentBox";

const meta: Meta<typeof ContentBox> = {
  title: "Profile/ContentBox",
  component: ContentBox,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    content: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof ContentBox>;

export const Content: Story = {
  args: {
    content: "content",
  },
};

export const MsgBox: Story = {
  args: {
    content: "msgbox",
  },
};
