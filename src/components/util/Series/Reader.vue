<template>
	<div class="pages">
		<img
			v-for="imgSrc in typedImages"
			class="page"
			:key="imgSrc"
			:src="imgSrc"
			@load="imageLoaded"
		/>
	</div>
</template>

<style lang="scss" scoped>
.page {
	max-width: 100%;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ReaderState from "../../../refs/reader";

export default defineComponent({
	props: {
		images: {
			type: Array,
			required: true,
		},
	},
	setup(props) {
		const typedImages = ref<string[]>(props.images as string[]);

		return {
			ReaderState,
			typedImages,
		};
	},
	methods: {
		imageLoaded() {
			ReaderState.value.imagesLoaded++;
		},
	},
});
</script>
