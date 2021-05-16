<template>
	<section>
		<h1>Equinox</h1>
		<p>
			Equinox is a web-based client for
			<anchor href="https://github.com/Suwayomi/Tachidesk">Tachidesk</anchor>.
			To use Equinox, you need to set up a Tachidesk server. See
			<anchor
				href="https://github.com/Suwayomi/Tachidesk#downloading-and-running-the-app"
				>this page</anchor
			>
			for a guide on how to set that up.
		</p>
	</section>
</template>

<style lang="scss" scoped>
h1 {
	color: var(--text-harsh);
	font-size: 2rem;
}
h1,
p {
	margin: 0;
}
p {
	margin-top: 20px;
}
</style>

<script>
// Import Vue
import { defineComponent } from "vue";

// Import components
import Anchor from "./Buttons/Anchor.vue";

export default defineComponent({
	components: {
		Anchor,
	},
});
</script>
