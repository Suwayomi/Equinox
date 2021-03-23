import { Store } from "vuex";
import { DefineComponent } from "vue";
import { State } from "./stores";

declare module "*.vue" {
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$store: Store<State>;
	}
}
