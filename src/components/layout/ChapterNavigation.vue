<template>
	<nav>
		<!-- <p>{{ ReaderState.currentChapter }}</p>
		<p>{{ currentChapter }} C</p> -->
		<div class="buttons">
			<nav-link
				v-if="previousChapter"
				:to="`/series/${previousChapter.mangaId}/chapter/${previousChapter.index}`"
			>
				{{ previousChapter.name }}
			</nav-link>
			<nav-link
				v-if="nextChapter"
				:to="`/series/${nextChapter.mangaId}/chapter/${nextChapter.index}`"
			>
				{{ nextChapter.name }}
			</nav-link>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
.buttons {
	display: flex;
	grid-gap: 10px;
	word-break: break-word;

	> * {
		width: 100%;
	}
}
</style>

<script lang="ts">
// Import Vue stuff
import { defineComponent, ref } from "vue";

// Import state
import ReaderState from "../../refs/reader";
import NavLink from "../util/Buttons/NavLink.vue";

export default defineComponent({
	components: { NavLink },
	setup() {
		let currentChapter = ref<any>({});
		let nextChapter = ref<any>({});
		let previousChapter = ref<any>({});

		const currentChapterIndex = ReaderState.value.currentChapter;
		currentChapter.value =
			(ReaderState.value?.chapters || []).find((c: any) => {
				return c.index == currentChapterIndex;
			}) || null;

		if (currentChapter.value) {
			previousChapter.value =
				ReaderState.value?.chapters[
					ReaderState.value?.chapters.indexOf(currentChapter.value) + 1
				];
			nextChapter.value =
				ReaderState.value?.chapters[
					ReaderState.value?.chapters.indexOf(currentChapter.value) - 1
				];
		}

		return {
			ReaderState,
			currentChapter,
			previousChapter,
			nextChapter,
		};
	},
});
</script>
