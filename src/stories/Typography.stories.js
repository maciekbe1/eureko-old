import Typography from "@/components/Typography";
import { Story } from "@storybook/react";

export default {
  title: "Typography",
  component: Typography,
  argTypes: {
    children: "Text",
    variant: "h2",
    align: "left",
    weight: "normal",
  },
};

export const Base: Story<{ children: React.ReactNode }> = (args) => (
  <Typography {...args} />
);
Base.args = {
  children: "Text",
  variant: "h2",
  align: "left",
  weight: "normal",
};
