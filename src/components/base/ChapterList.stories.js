import StorybookWrapper from "../../stories/Wrapper.vue";
import ChapterListComponent from "./ChapterList.vue";

export default {
	title: "Base/Chapters",
	component: ChapterListComponent,
};

const Template = (args) => ({
	components: {
		ChapterList: ChapterListComponent,
		StorybookWrapper,
	},
	setup() {
		return {
			args,
			chapters: [
				{
					name: "Chapter 2",
					index: 2,
					bookmarked: true,
					uploadDate: new Date(),
				},
				{
					name: "Chapter 1",
					index: 0,
					bookmarked: false,
					uploadDate: new Date(),
				},
			],
		};
	},
	template: `
	<storybook-wrapper class="no-padding">
		<chapter-list :chapters="chapters" />
	</storybook-wrapper>
	`,
});

export const ChapterList = Template.bind({});
