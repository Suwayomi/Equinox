<template>
	<div class="chapter">
		<full-loading v-if="loading" class="full-height" />
		<div>
			<reader
				v-if="ReaderState && ReaderState.chapter"
				:images="ReaderState.chapter.imageUrls"
			/>
		</div>
	</div>
</template>

<script lang="ts">
// Import Vue stuff
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import ReaderState from "../refs/reader";

// Import components
import FullLoading from "../components/util/Loading/FullLoading.vue";
import Reader from "../components/util/Series/Reader.vue";

export default defineComponent({
	components: {
		FullLoading,
		Reader,
	},
	setup() {
		const loading = ref(true);

		const baseUrl = localStorage.getItem("baseUrl");
		const route = useRoute();

		onMounted(() => {
			fetchData();
		});

		async function fetchData() {
			loading.value = true;
			const url = `${baseUrl}/api/v1/manga/${route.params.id}/chapter/${route.params.chapterId}`;

			const detailsReq = fetch(url)
				.then((d) => d.json())
				.then((details) => {
					details.imageUrls = Array(details.pageCount)
						.fill(0)
						.map((_, i) => `${url}/page/${i}`);

					// Send info to sidebar
					ReaderState.value = {
						pageCount: details.pageCount,
						imagesLoaded: 0,
						chapter: details,
					};
				});

			await Promise.all([detailsReq]);
			loading.value = false;
		}

		return {
			loading,
			baseUrl,
			ReaderState,
		};
	},
});
</script>
