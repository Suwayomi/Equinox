import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Settings from "../views/Settings.vue";
import History from "../views/History.vue";
import SeriesDetails from "../views/SeriesDetails.vue";
import Chapter from "../views/Chapter.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/settings",
		name: "Settings",
		component: Settings,
	},
	{
		path: "/history",
		name: "History",
		component: History,
	},
	{
		path: "/series/:id",
		name: "Series",
		component: SeriesDetails,
	},
	{
		path: "/series/:id/chapter/:chapterId",
		name: "Chapter",
		component: Chapter,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
