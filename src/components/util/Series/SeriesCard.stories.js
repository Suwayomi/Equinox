import StorybookWrapper from "../../../stories/Wrapper.vue";
import SeriesCard from "./SeriesCard.vue";

export default {
  title: "App/Info",
  component: SeriesCard,
};

const Template = (args) => ({
  components: { SeriesCard, StorybookWrapper },
  setup() {
    return { args };
  },
  template: `
  <storybook-wrapper>
  	<div :style="\`width: $\{args.width}px; border: 10px dotted var(--border)\`">
	  <series-card :small="args.small" :large="args.large" />
	</div>
  </storybook-wrapper>
  `,
});

export const SeriesCardHorizontal = Template.bind({});
SeriesCardHorizontal.args = {
  small: true,
  width: 300,
};

export const SeriesCardLarge = Template.bind({});
SeriesCardLarge.args = {
  large: true,
  width: 180,
};
