<template>
	<aside class="sidebar">
		<router-link to="/" class="brand-link">
			<section class="brand">
				<align-center-icon size="36" />
				<h1>Equinox</h1>
			</section>
		</router-link>

		<nav label="App">
			<nav-link to="/">
				<home-icon size="24" />
				<span>Home</span>
			</nav-link>
			<nav-link to="/settings">
				<settings-icon size="24" />
				<span>Settings</span>
			</nav-link>
			<nav-link to="/history">
				<clock-icon size="24" />
				<span>History</span>
			</nav-link>
		</nav>

		<div v-if="route.params.chapterId" class="reader-info">
			<div
				class="loading"
				v-if="
					SidebarRef.reader &&
					SidebarRef.reader.imagesLoaded < SidebarRef.reader.pageCount
				"
			>
				Loading... ({{
					Math.floor(
						(SidebarRef.reader.imagesLoaded / SidebarRef.reader.pageCount) * 100
					)
				}}%, {{ SidebarRef.reader.imagesLoaded }} of
				{{ SidebarRef.reader.pageCount }})
			</div>
		</div>
	</aside>
</template>

<style lang="scss" scoped>
aside {
	box-sizing: border-box;
	padding: 20px;
	width: 275px;
	height: calc(100vh - env(safe-area-inset-top));
	background: var(--body-offset);
	position: sticky;
	top: 0;
}

.brand-link {
	text-decoration: none;
	color: var(--text-harsh);

	&:hover {
		text-decoration: underline;
	}
}
.brand {
	display: grid;
	grid-template-columns: auto 1fr;
	grid-gap: 20px;
	align-items: center;
	font-size: 1.5rem;

	svg {
		color: var(--theme);
	}
}

.reader-info {
	margin-top: 20px;
	padding: 20px 0;
	border-top: 1px solid var(--border);

	.loading {
		text-align: center;
	}
}
</style>

<script lang="ts">
// Import Vue stuff
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

// Ref
import SidebarRef from "../../refs/sidebar";

// Import icons
import {
	AlignCenterIcon,
	HomeIcon,
	ClockIcon,
	SettingsIcon,
} from "@zhuowenli/vue-feather-icons";

// Import components
import NavLink from "../util/Buttons/NavLink.vue";

export default defineComponent({
	components: {
		AlignCenterIcon,
		NavLink,
		HomeIcon,
		SettingsIcon,
		ClockIcon,
	},
	setup() {
		const route = useRoute();

		return {
			SidebarRef,
			route,
		};
	},
});
</script>
