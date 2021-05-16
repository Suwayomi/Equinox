import StorybookWrapper from "../../../stories/Wrapper.vue";
import AnchorComponent from "./Anchor.vue";

export default {
	title: "Buttons/Anchor",
	component: AnchorComponent,
};

const Template = (args) => ({
	components: {
		Anchor: AnchorComponent,
		StorybookWrapper,
	},
	setup() {
		return { args };
	},
	template: `
	<storybook-wrapper class="no-padding">
		<anchor :href="args.href">{{args.label}}</anchor>
	</storybook-wrapper>
	`,
});

export const Anchor = Template.bind({});
Anchor.args = {
	label: "Something went wrong.",
	href: "https://jipfr.nl",
};
