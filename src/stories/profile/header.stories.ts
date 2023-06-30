import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Profile/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    thisMedia: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Desktop: Story = {
  args: {
    thisMedia: "desktop",
  },
};

export const Tablet: Story = {
  args: {
    thisMedia: "tablet",
  },
};

export const Mobile: Story = {
  args: {
    thisMedia: "mobile",
  },
};
