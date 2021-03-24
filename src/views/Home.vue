<template>
  <div>
    <series-list>
      <series-card />
      <series-card />
      <series-card />
    </series-list>
  </div>
</template>

<script lang="ts">
// Import Vue
import { defineComponent } from "vue";

// Import components
import SeriesList from "../components/util/Series/SeriesList.vue";
import SeriesCard from "../components/util/Series/SeriesCard.vue";

export default defineComponent({
  components: {
    SeriesList,
    SeriesCard,
  },
});
</script>