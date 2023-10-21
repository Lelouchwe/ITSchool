<script setup lang="ts">
	import type { RouteLocationRaw } from 'vue-router';

	interface IProps {
		type?: string;
		typeButton?: string;
		to?: RouteLocationRaw;
	}

	const props = withDefaults(defineProps<IProps>(), {
		type: 'button',
		typeButton: 'button',
	});
</script>
<template>
	<component class="v-button" :type="typeButton" :to="to" :is="props.type">
		<slot></slot>
	</component>
</template>
<style lang="scss">
	.v-button {
		display: flex;
		padding: 11px 16px;
		justify-content: center;
		align-items: center;
		gap: 10px;
		border-radius: 2px;
		border: 1px solid $button-primary;
		background: $button-primary;
		color: $color-primary;
		font-size: 17px;
		font-style: normal;
		font-weight: 400;
		line-height: 22px;
		//letter-spacing: -0.41px;
		transition: 0.3s;
		cursor: pointer;
		width: 100%;
		&:hover {
			background-color: $button-hover;
			border-color: $button-hover;
		}
		&:disabled {
			background-color: $button-disable;
		}
		&--outline {
			background-color: transparent;
			border: 1px solid $button-primary;
			color: $color-main;
			&:hover {
				border-color: $button-hover;
				background-color: inherit;
				color: $button-hover;
			}
		}
		&--link {
			border-color: transparent;
			background-color: transparent;
			color: $button-primary;
			width: auto;
			padding: 0;
			&:hover {
				background-color: transparent;
				border-color: transparent;
				color: $button-hover;
			}
		}
	}
</style>
