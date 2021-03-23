import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/:title",
		name: "Test",
		component: Home,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
