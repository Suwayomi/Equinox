<template>
  <div>
    <series-list>
      <series-card v-for="series in library" :key="series.id" :data="series" />
    </series-list>
  </div>
</template>

<script lang="ts">
// Import Vue
import { defineComponent, onMounted, ref } from "vue";

// Import components
import SeriesList from "../components/util/Series/SeriesList.vue";
import SeriesCard from "../components/util/Series/SeriesCard.vue";

// Import types
import { Series } from "../types";

export default defineComponent({
  components: {
    SeriesList,
    SeriesCard,
  },
  setup() {
    const defaultLib: Series[] = [];
    const library = ref(defaultLib);
    const loading = ref(true);

    async function fetchData() {
      loading.value = true;

      const baseUrl = localStorage.getItem("baseUrl");
      const url = `${baseUrl}/api/v1/library`;
      const libraryArray = await (await fetch(url)).json();
      library.value = libraryArray;

      loading.value = false;
    }

    onMounted(() => {
      fetchData();
    });

    return {
      library,
    };
  },
});
</script>