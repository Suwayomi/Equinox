<template>
	<div class="main-layout">
		<sidebar />
		<main class="container">
			<router-view />
		</main>
	</div>
</template>

<style lang="scss" scoped>
@use './index.scss' as v;

.container {
	width: 90%;
	max-width: 1200px;
	margin: 60px auto;
}
.main-layout {
	display: grid;
	grid-template-columns: auto 1fr;
}

@media (orientation: portrait) {
	.sidebar {
		display: none;
	}
	.main-layout {
		grid-template-columns: 100%;
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
