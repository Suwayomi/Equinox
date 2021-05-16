import StorybookWrapper from "../../../stories/Wrapper.vue";
import NavLinkComponent from "./NavLink.vue";

export default {
	title: "Buttons/NavLink",
	component: NavLinkComponent,
};

const Template = (args) => ({
	components: {
		NavLink: NavLinkComponent,
		StorybookWrapper,
	},
	setup() {
		return { args };
	},
	template: `
	<storybook-wrapper class="no-padding">
		<nav-link :to="args.href">{{args.label}}</nav-link>
	</storybook-wrapper>
	`,
});

export const NavLink = Template.bind({});
NavLink.args = {
	label: "Something went wrong.",
	href: "https://jipfr.nl",
};
