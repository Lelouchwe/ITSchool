<script lang="ts" setup>
	import VIcon from '@/components/ui/VIcon.vue';
	import { RouteLocationRaw } from 'vue-router';
	interface IProps {
		to?: RouteLocationRaw;
		icon?: string;
		underline?: boolean;
	}
	defineProps<IProps>();
</script>
<template>
	<component :is="to ? 'router-link' : 'span'" class="v-link" :class="{ underline }" :to="to">
		<v-icon v-if="icon" class="v-link__icon" :icon="icon" />
		<slot />
	</component>
</template>
<style lang="scss" scoped>
	.v-link {
		font-size: 17px;
		font-style: normal;
		font-weight: 400;
		line-height: 22px;
		color: $link-primary;
		width: fit-content;
		display: flex;
		align-items: center;
		gap: 8px;
		cursor: pointer;

		&__icon {
			width: 20px;
			height: 20px;
			fill: $link-primary;
		}

		&:hover {
			color: $link-hover;
			.v-link__icon {
				fill: $link-hover;
			}
		}

		&:disabled {
			color: $link-disable;
		}
		&.underline {
			text-decoration: underline;
			text-underline-offset: 3px;
		}
	}
</style>
