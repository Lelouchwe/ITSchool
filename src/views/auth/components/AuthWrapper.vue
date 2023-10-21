<script setup lang="ts">
	import VLogo from '@/components/header/VLogo.vue';
	import VLink from '@/components/ui/VLink.vue';
	import { computed } from 'vue';
	import { AuthSteps } from '@/composables/useAuth';
	import { RouteLocationRaw } from 'vue-router';
	import VLoader from '@/components/VLoader.vue';

	interface Props {
		back?: RouteLocationRaw | Boolean;
		step?: AuthSteps;
		loading?: boolean;
	}
	const props = withDefaults(defineProps<Props>(), {
		step: AuthSteps.START,
	});

	const emit = defineEmits<{
		change: [step: AuthSteps];
	}>();

	const validateBack = computed(() => {
		if (props?.step === AuthSteps?.START) return props.back;
		return null;
	});
	const toBack = () => {
		if (props?.step !== AuthSteps?.START) emit('change', AuthSteps.START);
	};
</script>
<template>
	<div class="auth-wrapper">
		<div class="auth-wrapper__preloader" v-if="props.loading"><v-loader /></div>
		<header class="auth-wrapper__header">
			<v-logo />
		</header>
		<v-link
			v-if="props.back && ['start', 'check'].includes(props.step)"
			class="auth-wrapper__back"
			:to="validateBack"
			@click="toBack"
			icon="left"
		>
			Назад
		</v-link>
		<template v-if="props?.step === AuthSteps.START">
			<slot />
		</template>
		<template v-if="props?.step === AuthSteps.CHECK">
			<slot name="CHECK" />
		</template>
		<template v-if="props?.step === AuthSteps.CONFIRM">
			<slot name="CONFIRM" />
		</template>
		<template v-if="props?.step === AuthSteps.COMPLETE">
			<slot name="COMPLETE" />
		</template>
	</div>
</template>
<style lang="scss" scoped>
	.auth-wrapper {
		position: relative;
		max-width: 848px;
		width: 100%;
		background-color: $color-primary;
		border-radius: 20px;
		margin: auto;
		padding: 88px 16px;
		display: grid;
		justify-content: center;
		overflow: hidden;
		&__preloader {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: grid;
			place-content: center;
			background: linear-gradient(90deg, #ffe9f3a1 0%, #dff0fffa 100%);
			z-index: 10;
		}
		&__header {
			display: flex;
			justify-content: center;
			margin-bottom: 40px;
			width: 352px;
		}
		&__back {
			margin-bottom: 27px;
		}
		@media (max-width: 400px) {
			display: block;
			&__header {
				width: 100%;
			}
		}
	}
</style>
