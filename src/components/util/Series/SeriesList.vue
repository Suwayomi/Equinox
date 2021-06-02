<template>
	<details :open="open" class="series-list">
		<summary class="list-top">
			<h2 class="title">
				{{ title.slice(0, 1).toUpperCase() }}{{ title.slice(1) }}
			</h2>
			<div class="flip-icon">
				<chevron-down-icon size="24" />
			</div>
		</summary>
		<div class="series-grid">
			<slot />
		</div>
	</details>
</template>

<style lang="scss" scoped>
@use '../../../index' as v;

details:not([open]) .flip-icon {
	transform: rotate(180deg);
}
details summary.list-top {
	cursor: pointer;
	border-bottom: 1px solid var(--border);
	margin-bottom: 10px;
	padding-bottom: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.title {
		font-size: 1.5rem;
		color: var(--text-harsh);
		margin: 0;
	}
}

.series-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	grid-gap: 20px 15px;
}

@media (max-width: v.$breakpoint) {
	.series-grid {
		grid-template-columns: 100%;
		grid-gap: 20px;
	}
}
</style>

<script lang="ts">
// Import Vue
import { defineComponent } from "vue";

// Import icons
import { ChevronDownIcon } from "@zhuowenli/vue-feather-icons";

export default defineComponent({
	components: {
		ChevronDownIcon,
	},
	props: {
		title: {
			type: String,
			required: false,
			default: "No title provided",
		},
		open: {
			type: Boolean,
			required: false,
			default: true,
		},
	},
});
</script>
