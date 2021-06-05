import StorybookWrapper from "../../../stories/Wrapper.vue";
import TagComponent from "./Tag.vue";

import { BookOpenIcon } from "@zhuowenli/vue-feather-icons";

export default {
	title: "Buttons/Tag",
	component: Tag,
};

const Template = (args) => ({
	components: {
		Tag: TagComponent,
		StorybookWrapper,
		BookOpenIcon,
	},
	setup() {
		return { args };
	},
	template: `
	<storybook-wrapper>
		<tag>
			{{ args.label }}
		</tag>
  	</storybook-wrapper>
  `,
});

export const Tag = Template.bind({});
Tag.args = {
	label: "Comedy",
};
