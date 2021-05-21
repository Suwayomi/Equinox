<template>
	<div class="loading-wrapper">
		<div class="loading-row"></div>
		<div class="loading-row"></div>
		<div class="loading-row"></div>
	</div>
</template>

<style lang="scss" scoped>
.loading-wrapper {
	width: 30px;
	height: 40px;
	// background: yellow;
	display: grid;
	align-items: end;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 2px;

	> *:nth-child(1) {
		animation-delay: 0;
	}
	> *:nth-child(2) {
		animation-delay: 200ms;
	}
	> *:nth-child(3) {
		animation-delay: 400ms;
	}
}
.loading-row {
	width: 100%;
	height: 9px;
	background: var(--theme);
	border-radius: 100px;
	animation: test 1s infinite;
}
</style>

<style>
@keyframes test {
	0% {
		height: 100%;
	}
	50% {
		height: 9px;
	}
	100% {
		height: 100%;
	}
}
</style>
