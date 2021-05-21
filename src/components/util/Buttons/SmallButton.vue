<template>
	<button class="small-button">
		<slot />
	</button>
</template>

<style lang="scss" scoped>
.small-button {
	border: 0;
	padding: 5px;
	border-radius: 4px;
	background: var(--content-highlight);
	color: var(--text);
	cursor: pointer;

	&:hover {
		background: var(--content-hover);
	}

	&.active {
		background: var(--badge-highlight);
		color: var(--badge-highlight-text);

		&:hover {
			background: var(--badge-highlight-hover);
		}
	}
}
</style>
