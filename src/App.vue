<template>
	<div class="main-layout">
		<sidebar />
		<main class="main-container">
			<router-view :key="$route.path" />
		</main>
	</div>
</template>

<style lang="scss" scoped>
@use './index.scss' as v;
.main-layout {
	display: grid;
	grid-template-columns: auto 1fr;
}

@media (orientation: portrait) {
	.sidebar {
		position: relative;
		width: auto;
		height: auto;
	}
	.main-layout {
		display: block;
	}
}
</style>

<script>
// Import Vue
import { defineComponent } from "vue";

// Import components
import Sidebar from "./components/layout/Sidebar.vue";

export default defineComponent({
	components: {
		Sidebar,
	},
});
</script>
