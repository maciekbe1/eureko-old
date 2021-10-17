import Button from "@/components/Button";
import { Story } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "danger"],
    },
    children: "Button",
  },
};

export const Primary: React.FC = (args) => <Button {...args} />;
Primary.args = { children: "hello" };
