import DLButton from "./DLButton.vue";

export default {
  /**
   * group title, story title, component
   */
  title: "atom/Button",
  component: DLButton
  // props
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  component: { DLButton },
//   template: '<DLButton @onClick="onclick" v-bind="$props" />'
  template: '<DLButton @onClick="onclick" v-bind="$props" />'
});

// primary
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Primary Button"
};

// secondary
export const Secondary = Template.bind({});
Primary.args = {
  // primary: true,
  label: "Secondary Button"
};
