<script setup lang="ts"></script>

<template>
	<main class="layout">
		<slot />
	</main>
</template>

<style scoped lang="scss">
	.layout {
		background-color: $color-secondary;
		display: flex;
		height: 100vh;
		width: 100%;
		padding: 64px 16px;
	}
</style>
