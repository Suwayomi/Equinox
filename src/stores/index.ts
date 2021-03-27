// Verify base URL is stored
let baseUrl = localStorage.getItem("baseUrl");
if (!baseUrl) {
	baseUrl = "http://127.0.0.1:4567";
	localStorage.setItem("baseUrl", baseUrl);
}

import { createStore } from "vuex";

export interface State {
	count: number;
}

// Create a new store instance.
const store = createStore({
	state(): State {
		return {
			count: 0,
		};
	},
	mutations: {
		/** Oh no */
		increment(state: State) {
			state.count++;
		},
		decrease(state: State) {
			state.count--;
		},
	},
});

export default store;
