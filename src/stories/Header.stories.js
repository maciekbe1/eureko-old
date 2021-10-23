import Header from "@/components/Header";
import { Story } from "@storybook/react";

export default {
  title: "Header",
  component: Header,
};

export const Base: React.FC = (args) => <Header {...args} />;
