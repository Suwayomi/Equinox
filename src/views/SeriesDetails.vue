<template>
	<div class="manga-details">
		<!-- Loading state -->
		<full-loading v-if="loading" />

		<!-- Information -->
		<div v-else>
			<div class="banner" :style="bannerStyle"></div>
			<container class="details-layout reduced-margin">
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
								v-for="genre in seriesData.genre"
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
						<chapter-list
							v-if="chapters.length > 0"
							:chapters="chapters"
							@update-chapters="updateChapters"
						/>
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
			</container>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.banner {
	width: 100%;
	height: 350px;
	// background-image: url(https://s4.anilist.co/file/anilistcdn/media/manga/banner/98416-1XM7oOALCGjA.jpg);
	background-image: var(--bg-image);
	background-color: var(--transparent-bg);
	background-position: center;
	background-size: cover;
}
.is-poster {
	margin-top: -100px;
}
.details-layout {
	display: grid;
	grid-template-columns: 200px 1fr;
	grid-gap: 20px;
}
section + section {
	margin-top: 40px;
}
.main-title {
	font-size: 2rem;
	margin-bottom: 40px;
	color: var(--text-harsh);
	margin: 0;
	display: flex;
	align-items: center;

	&::before {
		content: "";
		display: block;
		width: 0.8rem;
		height: 0.8rem;
		background: var(--theme);
		border-radius: 50%;
		margin-right: 10px;
	}
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
import { computed, defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

// Import components
import FullLoading from "../components/util/Loading/FullLoading.vue";
import Poster from "../components/util/Images/Poster.vue";
import Tag from "../components/util/Buttons/Tag.vue";
import ChapterList from "../components/base/ChapterList.vue";
import Message from "../components/util/Message.vue";
import Container from "../components/layout/Container.vue";

export default defineComponent({
	components: {
		FullLoading,
		Poster,
		Tag,
		ChapterList,
		Message,
		Container,
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
			const url = `${baseUrl}/api/v1/manga/${route.params.id}/`;

			const detailsReq = fetch(url)
				.then((d) => d.json())
				.then((details) => {
					seriesData.value = details;
				});

			const chaptersReq = updateChapters();

			await Promise.all([detailsReq, chaptersReq]);
			loading.value = false;
		}

		function updateChapters() {
			const chapterUrl = `${baseUrl}/api/v1/manga/${route.params.id}/chapters`;
			console.log(chapterUrl);
			return fetch(chapterUrl)
				.then((d) => d.json())
				.then((chaptersData) => {
					console.log(chaptersData);
					chapters.value = [];
					requestAnimationFrame(() => {
						chapters.value = chaptersData;
					});
				});
		}

		const bannerStyle = computed(() => {
			return `--bg-image: url("https://equinox-functions.netlify.app/.netlify/functions/banner?query=${encodeURIComponent(
				seriesData.value.title
			)}")`;
		});

		return {
			seriesData,
			chapters,
			loading,
			baseUrl,
			updateChapters,
			bannerStyle,
		};
	},
});
</script>
