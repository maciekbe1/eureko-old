import Input from "@/components/Input";
import { Story } from "@storybook/react";

export default {
  title: "Input",
  component: Input,
  argTypes: {},
};

export const Base = (args) => <Input {...args} />;
Base.args = { placeholder: "placehodler" };
