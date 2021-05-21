<template>
	<div class="manga-details">
		<!-- Loading state -->
		<full-loading v-if="loading" />

		<!-- Information -->
		<div v-else class="details-layout">
			<!-- Information, left side -->
			<aside>
				<poster :src="`${baseUrl}/api/v1/manga/${seriesData.id}/thumbnail`" />
			</aside>

			<!-- Main section -->
			<main>
				<!-- Main title -->
				<h1 class="main-title">{{ seriesData.title }}</h1>

				<div class="tags">
					<!-- Series status -->
					<tag>Status: {{ seriesData.status.toLowerCase() }}</tag>
					<!-- Genres -->
					<tag
						v-for="genre in seriesData.genre.split(', ')"
						:key="`genre-${genre.toLowerCase()}`"
					>
						{{ genre }}
					</tag>
				</div>
				<p>{{ seriesData.description }}</p>
				<p>{{ seriesData }}</p>
			</main>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.details-layout {
	display: grid;
	grid-template-columns: 200px 1fr;
	grid-gap: 20px;
}
.main-title {
	color: var(--text-harsh);
	margin: 0;
}
.tags {
	margin: 10px 0;
	display: flex;
	gap: 5px;
}
</style>

<script lang="ts">
// Import Vue
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

// Import components
import FullLoading from "../components/util/Loading/FullLoading.vue";
import Poster from "../components/util/Images/Poster.vue";
import Tag from "../components/util/Buttons/Tag.vue";

export default defineComponent({
	components: {
		FullLoading,
		Poster,
		Tag,
	},
	setup() {
		const seriesData = ref({});
		const loading = ref(true);

		const baseUrl = localStorage.getItem("baseUrl");
		const route = useRoute();

		onMounted(() => {
			fetchData();
		});

		async function fetchData() {
			loading.value = true;
			const url = `${baseUrl}/api/v1/manga/${route.params.id}/?onlineFetch=false`;
			const detailsReq = await fetch(url);
			const details = await detailsReq.json();
			seriesData.value = details;
			loading.value = false;
		}

		return {
			seriesData,
			loading,
			baseUrl,
		};
	},
});
</script>
