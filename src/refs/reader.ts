import { ref } from "vue";
import { RouteLocationNormalizedLoaded } from "vue-router";

const ReaderState = ref<any>({});

export function setBaseState(route?: RouteLocationNormalizedLoaded) {
	ReaderState.value = {
		pageCount: 0,
		imagesLoaded: 0,
		chapter: {},
		chapters: [],
		currentChapter: route ? route.params.chapterId : 0,
		currentSeries: route ? route.params.id : 0,
		loading: true,
	};
}
setBaseState();

export default ReaderState;
