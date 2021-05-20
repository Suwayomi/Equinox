import StorybookWrapper from "../../stories/Wrapper.vue";
import NoTachiComponent from "./NoTachi.vue";

export default {
	title: "Util/Empty",
	component: NoTachiComponent,
};

const Template = (args) => ({
	components: {
		NoTachi: NoTachiComponent,
		StorybookWrapper,
	},
	setup() {
		return { args };
	},
	template: `
	<storybook-wrapper>
		<no-tachi />
	</storybook-wrapper>
	`,
});

export const NoTachi = Template.bind({});
