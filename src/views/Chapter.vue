<template>
	<div class="chapter">
		<full-loading v-if="ReaderState.loading" class="full-height" />
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
import ReaderState, { setBaseState } from "../refs/reader";

// Import components
import FullLoading from "../components/util/Loading/FullLoading.vue";
import Reader from "../components/util/Series/Reader.vue";

export default defineComponent({
	components: {
		FullLoading,
		Reader,
	},
	setup() {
		console.log(1);
		const baseUrl = localStorage.getItem("baseUrl");
		const route = useRoute();

		setBaseState(route);

		onMounted(() => {
			fetchData();
		});

		async function fetchData() {
			ReaderState.value.loading = true;
			const chaptersUrl = `${baseUrl}/api/v1/manga/${route.params.id}/chapters`;
			const url = `${baseUrl}/api/v1/manga/${route.params.id}/chapter/${route.params.chapterId}`;

			setBaseState(route);

			const chaptersReq = fetch(chaptersUrl)
				.then((d) => d.json())
				.then((chapters) => {
					ReaderState.value.chapters = chapters;
				});

			const detailsReq = fetch(url)
				.then((d) => d.json())
				.then((details) => {
					details.imageUrls = Array(details.pageCount)
						.fill(0)
						.map((_, i) => `${url}/page/${i}`);

					// Send info to sidebar
					ReaderState.value.pageCount = details.pageCount;
					ReaderState.value.imagesLoaded = 0;
					ReaderState.value.chapter = details;
				});

			await Promise.all([chaptersReq, detailsReq]);
			ReaderState.value.loading = false;
		}

		return {
			baseUrl,
			ReaderState,
		};
	},
	beforeRouteUpdate() {
		console.log(4);
	},
});
</script>
