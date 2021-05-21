import StorybookWrapper from "../../stories/Wrapper.vue";
import BannerComponent from "./Banner.vue";

export default {
	title: "Util/Banner",
	component: BannerComponent,
};

const Template = (args) => ({
	components: {
		Banner: BannerComponent,
		StorybookWrapper,
	},
	setup() {
		return { args };
	},
	template: `
	<storybook-wrapper>
		<banner :type="args.type" style="width: 100%">{{args.label}}</banner>
	</storybook-wrapper>
	`,
});

export const ErrorBanner = Template.bind({});
ErrorBanner.args = {
	label: "This is an error banner",
	type: "error",
};

export const MessageBanner = Template.bind({});
MessageBanner.args = {
	label: "This is a message banner",
	type: "message",
};
