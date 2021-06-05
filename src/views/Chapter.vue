<template>
	<div class="chapter">
		<full-loading v-if="loading" class="full-height" />
		<div>
			<img
				v-for="imgSrc in chapterData.imageUrls"
				:key="imgSrc"
				:src="imgSrc"
				@load="imageLoaded"
			/>
		</div>
	</div>
</template>

<script lang="ts">
// Import Vue stuff
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import SidebarRef from "../refs/sidebar";

// Import components
import FullLoading from "../components/util/Loading/FullLoading.vue";

export default defineComponent({
	components: {
		FullLoading,
	},
	setup() {
		const loading = ref(true);
		const chapterData = ref<any>({});

		const baseUrl = localStorage.getItem("baseUrl");
		const route = useRoute();

		onMounted(() => {
			fetchData();
		});

		async function fetchData() {
			loading.value = true;
			console.log(route.params);
			const url = `${baseUrl}/api/v1/manga/${route.params.id}/chapter/${route.params.chapterId}`;

			const detailsReq = fetch(url)
				.then((d) => d.json())
				.then((details) => {
					details.imageUrls = Array(details.pageCount)
						.fill(0)
						.map((_, i) => `${url}/page/${i}`);
					chapterData.value = details;

					// Send info to sidebar
					SidebarRef.value.reader = {
						pageCount: details.pageCount,
						imagesLoaded: 0,
					};
					console.log(SidebarRef.value.reader);
				});

			await Promise.all([detailsReq]);
			loading.value = false;
		}

		return {
			chapterData,
			loading,
			baseUrl,
			SidebarRef,
		};
	},
	methods: {
		imageLoaded() {
			SidebarRef.value.reader.imagesLoaded++;
		},
	},
});
</script>
