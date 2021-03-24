import StorybookWrapper from "../../../stories/Wrapper.vue";
import SeriesList from "./SeriesList.vue";
import SeriesCard from "./SeriesCard.vue";

export default {
  title: "App/Info",
  component: SeriesList,
};

const Template = (args) => ({
  components: { SeriesList, SeriesCard, StorybookWrapper },
  setup() {
    return { args };
  },
  template: `
  <storybook-wrapper>
  	<div style="width: 100%; max-width: 1200px; border: 10px dotted var(--border)">
	  <series-list>
		<series-card :small="args.small" :large="args.large" />
		<series-card :small="args.small" :large="args.large" />
		<series-card :small="args.small" :large="args.large" />
		<series-card :small="args.small" :large="args.large" />
		<series-card :small="args.small" :large="args.large" />
		<series-card :small="args.small" :large="args.large" />
		<series-card :small="args.small" :large="args.large" />
		<series-card :small="args.small" :large="args.large" />
	  </series-list>
	</div>
  </storybook-wrapper>
  `,
});

export const List = Template.bind({});
