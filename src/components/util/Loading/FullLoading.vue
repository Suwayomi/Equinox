<template>
	<div class="full-loading">
		<loading />
	</div>
</template>

<style lang="scss" scoped>
.full-loading {
	width: 100%;
	min-height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

<script lang="ts">
// Import Vue
import { defineComponent } from "vue";

// Import components
import Loading from "./Loading.vue";

export default defineComponent({
	components: {
		Loading,
	},
});
</script>
