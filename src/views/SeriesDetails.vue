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
				<!-- Main title / genre / description section -->
				<section>
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
				</section>

				<!-- Chapters section -->
				<section>
					<h2 class="section-title">Chapters</h2>
					<chapter-list v-if="chapters.length > 0" :chapters="chapters" />
					<message v-else class="left">
						<p>
							Well, that's awkward. It looks like there's no chapters for this
							series.
						</p>
						<p>
							If this is a mistake, try viewing the chapters on the source
							website or reloading the page.
						</p>
					</message>
				</section>
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
section + section {
	margin-top: 40px;
}
.main-title {
	color: var(--text-harsh);
	margin: 0;
}
.section-title {
	color: var(--text-harsh);
	margin: 0;
	margin-bottom: 10px;
}
.tags {
	margin: 10px 0;
	display: flex;
	flex-wrap: wrap;
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
import ChapterList from "../components/base/ChapterList.vue";
import Message from "../components/util/Message.vue";

export default defineComponent({
	components: {
		FullLoading,
		Poster,
		Tag,
		ChapterList,
		Message,
	},
	setup() {
		const seriesData = ref<any>({});
		const chapters = ref<any[]>([]);
		const loading = ref(true);

		const baseUrl = localStorage.getItem("baseUrl");
		const route = useRoute();

		onMounted(() => {
			fetchData();
		});

		async function fetchData() {
			loading.value = true;
			const url = `${baseUrl}/api/v1/manga/${route.params.id}/?onlineFetch=false`;
			const chapterUrl = `${baseUrl}/api/v1/manga/${route.params.id}/chapters?onlineFetch=false`;

			const detailsReq = fetch(url)
				.then((d) => d.json())
				.then((details) => {
					seriesData.value = details;
				});

			const chaptersReq = fetch(chapterUrl)
				.then((d) => d.json())
				.then((chaptersData) => {
					chapters.value = chaptersData;
				});

			await Promise.all([detailsReq, chaptersReq]);
			loading.value = false;
		}

		return {
			seriesData,
			chapters,
			loading,
			baseUrl,
		};
	},
});
</script>
