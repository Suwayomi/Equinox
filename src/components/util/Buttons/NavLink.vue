<template>
	<router-link class="nav-link" :to="to">
		<slot />
	</router-link>
</template>

<style lang="scss" scoped>
.nav-link {
	display: grid;
	grid-template-columns: auto 1fr;
	grid-gap: 10px;
	align-items: center;
	font-size: 1rem;
	padding: 10px;
	border-radius: 6px;
	text-decoration: none;
	font-weight: bold;
	color: inherit;

	&.router-link-exact-active {
		background: var(--badge-highlight);
		color: var(--badge-highlight-text);
		cursor: initial;
	}
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		to: {
			type: String,
			required: true,
		},
	},
});
</script>
