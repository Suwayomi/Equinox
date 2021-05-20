<template>
	<div class="no-server-wrapper">
		<div class="no-server">
			<h2 class="title">{{ title }}</h2>
			<p class="description">
				Looks like the URL provided in the settings is not running a Tachidesk
				server. To fix this, change the URL on the settings page or host a
				server on the specified address.
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.no-server-wrapper {
	width: 100%;
	display: flex;
	justify-content: center;
}
.no-server {
	max-width: 400px;
	padding: 40px 15px;
	background: var(--content);
	border-radius: 6px;
}
.no-server .title {
	color: var(--text-harsh);
	margin-top: 0;
}
.description {
	margin-bottom: 0;
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	setup() {
		const kaomoji = [
			"(ノ_<。)",
			"(-_-)",
			"(´-ω-`)",
			".･ﾟﾟ･(／ω＼)･ﾟﾟ･.",
			"(μ_μ)",
			"(ﾉД`)",
			"(-ω-、)",
			"。゜゜(´Ｏ`) ゜゜。",
			"o(TヘTo)",
			"( ; ω ; )",
			"(｡╯︵╰｡)",
			"｡･ﾟﾟ*(>д<)*ﾟﾟ･｡",
			"( ﾟ，_ゝ｀)",
			"(个_个)",
			"(╯︵╰,)",
			"｡･ﾟ(ﾟ><ﾟ)ﾟ･｡",
			"( ╥ω╥ )",
			"(╯_╰)",
			"(╥_╥)",
			".｡･ﾟﾟ･(＞_＜)･ﾟﾟ･｡.",
			"(／ˍ・、)",
			"(ノ_<、)",
			"(╥﹏╥)",
			"｡ﾟ(｡ﾉωヽ｡)ﾟ｡",
			"(つω`｡)",
			"(｡T ω T｡)",
			"(ﾉω･､)",
			"･ﾟ･(｡>ω<｡)･ﾟ･",
			"(T_T)",
			"(>_<)",
			"(っ˘̩╭╮˘̩)っ",
			"｡ﾟ･ (>﹏<) ･ﾟ｡",
			"o(〒﹏〒)o",
			"(｡•́︿•̀｡)",
			"(ಥ﹏ಥ)",
		];

		return {
			kaomoji,
			title: kaomoji[Math.floor(Math.random() * kaomoji.length)],
		};
	},
});
</script>
