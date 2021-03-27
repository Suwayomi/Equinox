import StorybookWrapper from "../../../stories/Wrapper.vue";
import SmallButtonComponent from "./SmallButton.vue";

import { BookOpenIcon } from "@zhuowenli/vue-feather-icons";

export default {
  title: "Buttons/Small",
  component: SmallButtonComponent,
};

const Template = (args) => ({
  components: {
    SmallButton: SmallButtonComponent,
    StorybookWrapper,
    BookOpenIcon,
  },
  setup() {
    return { args };
  },
  template: `
  <storybook-wrapper>
    <small-button>
	    <book-open-icon size="24" />
	  </small-button>
  </storybook-wrapper>
  `,
});

export const SmallButton = Template.bind({});
