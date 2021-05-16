import StorybookWrapper from "../../stories/Wrapper.vue";
import SidebarComponent from "./Sidebar.vue";

export default {
	title: "Layout/Sidebar",
	component: SidebarComponent,
};

const Template = (args) => ({
	components: {
		Sidebar: SidebarComponent,
		StorybookWrapper,
	},
	setup() {
		return { args };
	},
	template: `
  <storybook-wrapper class="no-padding">
	  <div style="width: 100%">
		  <sidebar />
	  </div>
  </storybook-wrapper>
  `,
});

export const Sidebar = Template.bind({});
