<template>
	<div class="chapter-list">
		<div v-for="chapter in chapters" :key="chapter.index" class="chapter">
			<router-link to="/" class="chapter-info">
				<div class="spread">
					<div class="chapter-main">
						<p class="chapter-title">{{ chapter.name }}</p>
					</div>
					<div class="chapter-right">
						<small-button :class="chapter.bookmarked ? 'active' : ''">
							<bookmark-icon size="24" />
						</small-button>
					</div>
				</div>
			</router-link>
			<!-- {{ chapter }} -->
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
import { defineComponent } from "vue";

// Import components
import SmallButton from "../util/Buttons/SmallButton.vue";

// Import icons
import { BookmarkIcon } from "@zhuowenli/vue-feather-icons";

export default defineComponent({
	components: {
		SmallButton,
		BookmarkIcon,
	},
	props: {
		chapters: {
			type: Array,
			required: true,
		},
	},
});
</script>
