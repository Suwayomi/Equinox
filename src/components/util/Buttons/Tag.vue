<template>
	<div class="badge">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.badge {
	display: inline-block;
	padding: 2px 8px;
	border-radius: 4px;
	background: var(--theme);
	color: var(--text-on-theme);
}
</style>
