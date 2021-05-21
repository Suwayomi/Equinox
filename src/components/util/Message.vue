<template>
	<div class="message-wrapper">
		<div class="message">
			<h2 class="title">{{ title }}</h2>
			<p class="description">
				<slot />
			</p>
		</div>
	</div>
</template>

<style lang="scss">
.message {
	p {
		margin: 0;
	}
	p + p {
		margin-top: 10px;
	}
}
</style>

<style lang="scss" scoped>
.message-wrapper {
	width: 100%;
	display: flex;
	justify-content: center;

	&.left {
		justify-content: flex-start;
	}
}
.message {
	width: 100%;
	max-width: 400px;
	padding: 40px 15px;
	background: var(--content);
	border-radius: 6px;
}
.message .title {
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
