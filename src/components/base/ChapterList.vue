<template>
	<div class="chapter-list">
		<div v-for="chapter in typedChapters" :key="chapter.index" class="chapter">
			<router-link
				:to="`/series/${chapter.mangaId}/chapter/${chapter.index}`"
				class="chapter-info"
			>
				<div class="spread">
					<div class="chapter-main">
						<p class="chapter-title">
							<span class="chapter-name">{{ chapter.name }}</span>
							<span class="chapter-date">
								{{ new Date(chapter.uploadDate).toISOString().split("T")[0] }}
							</span>
						</p>
					</div>
					<div class="chapter-right"></div>
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
	padding: 12px 10px;
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
	setup(props) {
		const typedChapters = ref<any[]>(props.chapters);

		return {
			typedChapters,
		};
	},
});
</script>
