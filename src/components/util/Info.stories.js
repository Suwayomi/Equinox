import StorybookWrapper from "../../stories/Wrapper.vue";
import InfoComponent from "./Info.vue";

export default {
	title: "Util/Info",
	component: InfoComponent,
};

const Template = (args) => ({
	components: {
		Info: InfoComponent,
		StorybookWrapper,
	},
	setup() {
		return { args };
	},
	template: `
	<storybook-wrapper>
		<info />
	</storybook-wrapper>
	`,
});

export const Info = Template.bind({});
