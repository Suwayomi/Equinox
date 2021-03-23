import StorybookWrapper from "../../stories/Wrapper.vue";
import MyButton from "./Button.vue";

export default {
  title: "App/Button",
  component: MyButton,
};

const Template = (args) => ({
  components: { MyButton, StorybookWrapper },
  setup() {
    return { args };
  },
  template: `
  <storybook-wrapper>
    <my-button :type="args.type">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
      {{args.label}}
    </my-button>
  </storybook-wrapper>
  `,
});

export const Main = Template.bind({});
Main.args = {
  type: "green",
  label: "This is my button",
};

export const Red = Template.bind({});
Red.args = {
  type: "red",
  label: "This is my button",
};
