<template>
	<container>
		<main>
			<!-- Errors -->
			<div v-if="error">
				<banner type="error">
					{{ error }}
				</banner>
			</div>

			<!-- Information section -->
			<info />

			<full-loading v-if="loading" />

			<!-- "No tachidesk server" error -->
			<message v-else-if="displayNoTachi">
				Looks like the URL provided in the settings is not running a Tachidesk
				server. To fix this, change the URL on the settings page or host a
				server on the specified address.
			</message>

			<!-- Some list idk -->
			<series-list v-else-if="library.length > 0" title="Library" open>
				<series-card
					v-for="series in library"
					:key="series.id"
					:data="series"
				/>
			</series-list>

			<!-- Some list idk -->
			<series-list
				v-for="category in categories"
				:title="category.name"
				:key="`category-${category.id}`"
				open
			>
				<full-loading v-if="category.loading" />
				<series-card
					v-else
					v-for="series in category.series"
					:key="series.id"
					:data="series"
				/>
			</series-list>
		</main>
	</container>
</template>

<style lang="scss" scoped>
main > * + * {
	margin-top: 30px;
}
</style>

<script lang="ts">
// Import Vue
import { defineComponent, onMounted, ref } from "vue";

// Import components
import SeriesList from "../components/util/Series/SeriesList.vue";
import SeriesCard from "../components/util/Series/SeriesCard.vue";
import Banner from "../components/util/Banner.vue";
import Info from "../components/util/Info.vue";
import Message from "../components/util/Message.vue";
import Container from "../components/layout/Container.vue";
import FullLoading from "../components/util/Loading/FullLoading.vue";

// Import types
import { Category, Series } from "../types";

export default defineComponent({
	components: {
		SeriesList,
		SeriesCard,
		Banner,
		Info,
		Message,
		FullLoading,
		Container,
	},
	setup() {
		const defaultLib: Series[] = [];

		const library = ref(defaultLib);
		const categories = ref<Category[]>([]);
		const loading = ref(true);
		const error = ref("");
		const displayNoTachi = ref(false);

		let baseUrl = ref(localStorage.getItem("baseUrl"));

		onMounted(() => {
			fetchData();
		});

		async function fetchData() {
			loading.value = true;
			library.value = [];

			try {
				const url = `${baseUrl.value}/api/v1/library`;
				const libraryArray = await (await fetch(url)).json();
				library.value = libraryArray;
				displayNoTachi.value = false;
			} catch (err) {
				displayNoTachi.value = true;
			}

			loading.value = false;

			// Fetch all categories
			const categoriesUrl = `${baseUrl.value}/api/v1/category`;
			const categoryArray = await (await fetch(categoriesUrl)).json();
			categories.value = categoryArray.map((v: Category) => {
				return {
					...v,
					loading: true,
				};
			});

			const updatedCategories: Category[] = await Promise.all(
				categoryArray.map(async (category: Category) => {
					category.loading = false;
					const categoryUrl = `${categoriesUrl}/${category.id}`;
					const categoryData = await (await fetch(categoryUrl)).json();
					category.series = categoryData;
					return category;
				})
			);

			categories.value = updatedCategories.sort((a, b) => a.order - b.order);
		}

		return {
			loading,
			library,
			baseUrl,
			error,
			categories,
			displayNoTachi,
		};
	},
});
</script>
