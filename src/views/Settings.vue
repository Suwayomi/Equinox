<template>
	<main>
		<container>
			<!-- Errors -->
			<div v-if="error">
				<banner type="error">
					{{ error }}
				</banner>
			</div>

			<!-- Message -->
			<div v-if="message">
				<banner type="message">
					{{ message }}
				</banner>
			</div>

			<!-- Change error -->
			<p>Change base URL for Tachidesk API</p>
			<input
				type="text"
				:value="(baseUrl || '').toString()"
				@change="(e) => setBaseUrl(e)"
				style="width: 100%; font-size: 1rem"
			/>
			{{ baseUrl }}
		</container>
	</main>
</template>

<script lang="ts">
// Import Vue
import { defineComponent, ref } from "vue";

// Import components
import Banner from "../components/util/Banner.vue";
import Container from "~/components/layout/Container.vue";

export default defineComponent({
	components: {
		Banner,
		Container,
	},
	setup() {
		let baseUrl = ref(localStorage.getItem("baseUrl"));
		const error = ref("");
		const message = ref("");

		async function setBaseUrl(evt: Event) {
			// Extract value from event
			let e = (<HTMLTextAreaElement>evt.currentTarget).value.trim();

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
				message.value = "";
				if (e.toLowerCase().startsWith("http")) {
					const url = `${e}/api/v1/about`;
					const aboutReq = await fetch(url);

					if (aboutReq.status === 200) {
						console.log(aboutReq);
						localStorage.setItem("baseUrl", e);
						baseUrl.value = e;
						message.value = "Your new base URL has been saved.";
					} else {
						fail();
					}
				} else {
					fail();
				}
			} catch (err) {
				fail();
			}
		}

		return {
			setBaseUrl,
			baseUrl,
			error,
			message,
		};
	},
});
</script>
