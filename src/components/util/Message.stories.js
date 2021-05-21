import StorybookWrapper from "../../stories/Wrapper.vue";
import MessageComponent from "./Message.vue";

export default {
	title: "Util/Empty",
	component: MessageComponent,
};

const Template = (args) => ({
	components: {
		Message: MessageComponent,
		StorybookWrapper,
	},
	setup() {
		return { args };
	},
	template: `
	<storybook-wrapper>
		<message>
			{{ args.message }}
		</message>
	</storybook-wrapper>
	`,
});

export const Message = Template.bind({});
Message.args = {
	message:
		"This is a message component. It can be used to display errors (though banners are preferred for that) or general-purpose messages, like empty states.",
};
