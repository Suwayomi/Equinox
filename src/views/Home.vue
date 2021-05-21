<template>
	<main>
		<!-- Errors -->
		<div v-if="error">
			<banner type="error">
				{{ error }}
			</banner>
		</div>

		<!-- Information section -->
		<Info />

		<!-- Temporary base URL config input -->
		<details>
			<summary>Change base URL for Tachidesk API</summary>
			<input
				type="text"
				:value="(baseUrl || '').toString()"
				@change="(e) => setBaseUrl(e)"
				style="width: 100%; font-size: 1rem"
			/>
		</details>

		<full-loading v-if="loading" />

		<!-- "No tachidesk server" error -->
		<message v-else-if="displayNoTachi">
			Looks like the URL provided in the settings is not running a Tachidesk
			server. To fix this, change the URL on the settings page or host a server
			on the specified address.
		</message>

		<!-- Some list idk -->
		<series-list v-else>
			<series-card v-for="series in library" :key="series.id" :data="series" />
		</series-list>
	</main>
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
import FullLoading from "../components/util/Loading/FullLoading.vue";

// Import types
import { Series } from "../types";

export default defineComponent({
	components: {
		SeriesList,
		SeriesCard,
		Banner,
		Info,
		Message,
		FullLoading,
	},
	setup() {
		const defaultLib: Series[] = [];

		const library = ref(defaultLib);
		const loading = ref(true);
		const error = ref("");
		const displayNoTachi = ref(false);

		let baseUrl = ref(localStorage.getItem("baseUrl"));

		onMounted(() => {
			fetchData();
		});

		async function setBaseUrl(evt: Event) {
			// Extract value from event
			let e = (<HTMLTextAreaElement>evt.currentTarget).value;

			console.log(e);
			while (e.endsWith("/")) {
				e = e.slice(0, -1);
			}
			console.log(e);

			function fail() {
				error.value = "The URL you provided is not running a Tachidesk server.";
				baseUrl.value = baseUrl.value;
			}

			try {
				error.value = "";
				const url = `${e}/api/v1/about`;
				const aboutReq = await fetch(url);

				if (aboutReq.status === 200) {
					console.log(aboutReq);
					localStorage.setItem("baseUrl", e);
					baseUrl.value = e;
					fetchData();
				} else {
					fail();
				}
			} catch (err) {
				fail();
			}
		}

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
		}

		return {
			loading,
			library,
			baseUrl,
			error,
			setBaseUrl,
			displayNoTachi,
		};
	},
});
</script>
