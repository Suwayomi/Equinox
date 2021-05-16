<template>
	<a :href="href" target="_blank">
		<slot />
	</a>
</template>

<style lang="scss" scoped>
a {
	color: var(--theme);
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
}
</style>

<script>
// Import Vue
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		href: {
			type: String,
			required: true,
		},
	},
});
</script>
