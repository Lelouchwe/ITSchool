<script setup lang="ts">
	import { useRoute } from 'vue-router';
	const route = useRoute();
</script>

<template>
	<div class="mount" :class="{ 'mount--focused': route.meta.layoutProps?.focused }">
		<component
			:is="route.meta.layoutComponent"
			:focused="route.meta.layoutProps?.focused"
			:sidebar="route.meta.layoutProps?.sidebar"
		>
			<slot />
		</component>
	</div>
</template>

<style lang="scss">
	.mount {
		&--focused {
			background-color: $color-secondary;
		}
	}
</style>
