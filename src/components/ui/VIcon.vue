<script setup lang="ts">
	import { computed } from 'vue';

	const props = defineProps({
		icon: { type: String, required: true },
	});
	const name = computed(() => `#icon-${props.icon}`);
</script>
<template>
	<svg aria-hidden="true">
		<use :xlink:href="name"></use>
	</svg>
</template>
