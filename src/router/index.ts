import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Settings from "../views/Settings.vue";
import History from "../views/History.vue";
import SeriesDetails from "../views/SeriesDetails.vue";

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
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
