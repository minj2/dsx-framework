import React from "react";
import { Button } from "./Button"; // Button 컴포넌트 필요!
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} onClick={action("clicked")} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  primary: false,
};
