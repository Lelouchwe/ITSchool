<script lang="ts" setup>
	import VIcon from '@/components/ui/VIcon.vue';
</script>

<template>
	<div class="auth-complete">
		<v-icon class="auth-complete__icon" icon="check" />
		<h2 class="auth-complete__header" v-if="$slots.header">
			<slot name="header" />
		</h2>
		<h3 class="auth-complete__subheader" v-if="$slots.subheader">
			<slot name="subheader" />
		</h3>
		<div class="auth-complete__button" v-if="$slots.button">
			<slot name="button" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.auth-complete {
		display: grid;
		align-items: center;
		max-width: 390px;
		gap: 24px;
		&__header {
			color: $color-main;
			text-align: center;
			font-size: 28px;
			font-style: normal;
			font-weight: 600;
			line-height: 34px;
		}
		&__subheader {
			color: $color-main;
			text-align: center;
			font-size: 17px;
			font-style: normal;
			font-weight: 400;
			line-height: 22px;
			letter-spacing: -0.41px;
		}
		&__icon {
			width: 64px;
			height: 64px;
			margin: 16px auto;
		}
		&__button {
			margin-top: 24px;
		}
	}
</style>
