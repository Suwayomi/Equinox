<template>
	<div class="banner" :data-type="type">
		<alert-circle-icon size="24" v-if="type === 'error'" />
		<check-icon size="24" v-else-if="type === 'message'" />
		<unknown-icon size="24" v-else />
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.banner {
	padding: 8px 16px;
	display: grid;
	grid-template-columns: 24px 1fr;
	grid-gap: 10px;
	align-items: center;
	border-radius: 4px;
	padding-right: 24px;
	z-index: 50;

	&[data-type="error"] {
		background: #fbe8e8;
		color: #5f0000;
	}
	&[data-type="message"] {
		background: #cbefe8;
	}
}

.banner.do-bottom-margin {
	margin-bottom: 20px;
}
@media (prefers-color-scheme: dark) {
	.banner[data-type="message"] {
		background: #1a403c;
	}
	.banner[data-type="error"] {
		background: #382228;
		color: #ff7d7d;
	}
}
</style>

<script>
// Import Vue
import { defineComponent } from "vue";

// Import icons
import {
	AlertCircleIcon,
	CheckIcon,
	HelpCircleIcon as UnknownIcon,
} from "@zhuowenli/vue-feather-icons";

export default defineComponent({
	components: {
		AlertCircleIcon,
		CheckIcon,
		UnknownIcon,
	},
	props: {
		type: {
			type: String,
			required: false,
			default: "error",
		},
	},
});
</script>
