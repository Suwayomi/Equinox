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
  	<div style="width: 350px; border: 10px dotted var(--border)">
	  <series-card />
	</div>
  </storybook-wrapper>
  `,
});

export const MangaCardHorizontal = Template.bind({});
