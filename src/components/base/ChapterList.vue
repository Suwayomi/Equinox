<template>
	<div class="chapter-list">
		<div v-for="chapter in typedChapters" :key="chapter.index" class="chapter">
			<router-link to="/" class="chapter-info">
				<div class="spread">
					<div class="chapter-main">
						<p class="chapter-title">
							<span class="chapter-name">{{ chapter.name }}</span>
							<span class="chapter-date">
								{{ new Date(chapter.uploadDate).toISOString().split("T")[0] }}
							</span>
						</p>
					</div>
					<div class="chapter-right">
						<small-button
							:class="chapter.bookmarked ? 'active' : ''"
							@click="(e) => handleBookmarkClick(e, chapter)"
						>
							<loading class="icon-size" v-if="chapter.loading" />
							<bookmark-icon v-else size="24" />
						</small-button>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.chapter-list {
	width: 100%;
}
.chapter-info {
	display: block;
	color: inherit;
	text-decoration: none;
	padding: 5px 10px;
	margin-left: -10px;
	margin-right: -10px;
	border-radius: 4px;

	.chapter-name {
		margin-right: 10px;
	}
	.chapter-date {
		color: var(--text-secondary);
	}

	p {
		margin: 0;
	}

	&:hover {
		background: var(--border);
	}
}
.chapter + .chapter {
	border-top: 1px solid var(--border);
}

.spread {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.chapter-title {
	color: var(--text);
}
</style>

<script lang="ts">
// Import Vue
import { defineComponent, ref } from "vue";

// Import components
import SmallButton from "../util/Buttons/SmallButton.vue";
import Loading from "../util/Loading/Loading.vue";

// Import icons
import { BookmarkIcon } from "@zhuowenli/vue-feather-icons";

export default defineComponent({
	components: {
		SmallButton,
		Loading,
		BookmarkIcon,
	},
	props: {
		chapters: {
			type: Array,
			required: true,
		},
	},
	setup(props, { emit }) {
		const typedChapters = ref<any[]>(props.chapters);

		const handleBookmarkClick = async (e: MouseEvent, chapter: any) => {
			e.preventDefault();
			chapter.loading = true;

			const baseUrl = localStorage.getItem("baseUrl");
			const patchUrl = `${baseUrl}/api/v1/manga/${chapter.mangaId}/chapter/${chapter.index}`;

			console.log(patchUrl);
			const fd = new FormData();
			fd.append("bookmarked", (!chapter.bookmarked).toString());

			await fetch(patchUrl, {
				method: "PATCH",
				body: fd,
			})
				.then((d) => d.text())
				.then(() => {
					emit("update-chapters");
				});
		};

		return {
			typedChapters,
			handleBookmarkClick,
		};
	},
});
</script>
