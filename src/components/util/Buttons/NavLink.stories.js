import StorybookWrapper from "../../../stories/Wrapper.vue";
import NavLinkComponent from "./NavLink.vue";
import { HomeIcon } from "@zhuowenli/vue-feather-icons";

export default {
	title: "Buttons/NavLink",
	component: NavLinkComponent,
};

const Template = (args) => ({
	components: {
		NavLink: NavLinkComponent,
		StorybookWrapper,
		HomeIcon,
	},
	setup() {
		return { args };
	},
	template: `
	<storybook-wrapper class="no-padding">
		<nav-link :class="args.selected ? 'router-link-exact-active' : ''" :to="args.href">
			<home-icon size="24" />
			<span>{{args.label}}</span>
		</nav-link>
	</storybook-wrapper>
	`,
});

export const NavLink = Template.bind({});
NavLink.args = {
	label: "Home",
	href: "https://jipfr.nl",
	selected: false,
};

export const SelectedNavLink = Template.bind({});
SelectedNavLink.args = {
	label: "Home",
	href: "https://jipfr.nl",
	selected: true,
};
