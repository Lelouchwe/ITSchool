<script setup lang="ts">
	import VHeader from '@/components/header/VHeader.vue';
	defineProps({
		focused: { type: Boolean, default: false },
		sidebar: { type: Boolean, default: false },
		footer: { type: Boolean, default: false },
	});
</script>

<template>
	<div class="main" :class="{ 'main--footer': footer }">
		<v-header />
		<main class="layout">
			<div class="layout__sidebar" v-if="sidebar"></div>
			<slot />
		</main>
	</div>
</template>

<style scoped lang="scss">
	.main {
		max-width: 1440px;
		margin: auto;

		&--footer {
			padding: 0 48px;
		}

		.layout {
			padding: 0 48px 88px;
			@media (max-width: 600px) {
				padding: 0 16px;
			}
		}
	}
</style>
