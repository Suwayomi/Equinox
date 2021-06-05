<template>
	<div class="pages">
		<img
			v-for="imgSrc in images"
			:key="imgSrc"
			:src="imgSrc"
			@load="imageLoaded"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ReaderState from "../../../refs/reader";

export default defineComponent({
	props: {
		images: {
			type: Array,
			required: true,
		},
	},
	setup() {
		return {
			ReaderState,
		};
	},
	methods: {
		imageLoaded() {
			console.log(ReaderState.value);
			ReaderState.value.imagesLoaded++;
		},
	},
});
</script>
