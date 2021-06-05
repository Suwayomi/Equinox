import StorybookWrapper from "../../../stories/Wrapper.vue";
import StorybookContainer from "../../../stories/Container.vue";
import SeriesList from "./SeriesList.vue";
import SeriesCard from "./SeriesCard.vue";

export default {
	title: "Displays/Lists",
	component: SeriesList,
};

const Template = (args) => ({
	components: {
		SeriesList,
		SeriesCard,
		StorybookWrapper,
		StorybookContainer,
	},
	setup() {
		return { args };
	},
	template: `
  <storybook-wrapper>
  	<storybook-container width="1200px">
      <series-list :title="args.title">
        <series-card fake :small="args.small" :large="args.large" />
        <series-card fake :small="args.small" :large="args.large" />
        <series-card fake :small="args.small" :large="args.large" />
        <series-card fake :small="args.small" :large="args.large" />
        <series-card fake :small="args.small" :large="args.large" />
        <series-card fake :small="args.small" :large="args.large" />
        <series-card fake :small="args.small" :large="args.large" />
        <series-card fake :small="args.small" :large="args.large" />
      </series-list>
    </storybook-container>
  </storybook-wrapper>
  `,
});

export const List = Template.bind({});
List.args = {
	title: "This is the collapsible title",
};
