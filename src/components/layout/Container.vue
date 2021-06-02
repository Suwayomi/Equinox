<template>
	<div class="container">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.container {
	width: 90%;
	max-width: 1200px;
	margin: 60px auto;

	&.reduced-margin {
		margin-top: 30px;
	}
}
</style>
