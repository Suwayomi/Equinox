import StorybookWrapper from "../../../stories/Wrapper.vue";
import FullLoadingComponent from "./FullLoading.vue";
import LoadingComponent from "./Loading.vue";

export default {
	title: "Util/Loading",
	component: FullLoadingComponent,
};

const Template = (args) => ({
	components: {
		FullLoading: FullLoadingComponent,
		StorybookWrapper,
	},
	setup() {
		return { args };
	},
	template: `
	<storybook-wrapper>
		<full-loading style="background: rgba(0, 0, 0, 0.1)" />
	</storybook-wrapper>
	`,
});

export const FullLoading = Template.bind({});

const Template2 = (args) => ({
	components: {
		Loading: LoadingComponent,
		StorybookWrapper,
	},
	setup() {
		return { args };
	},
	template: `
	<storybook-wrapper>
		<loading style="background: rgba(0, 0, 0, 0.1)" />
	</storybook-wrapper>
	`,
});

export const Loading = Template2.bind({});
