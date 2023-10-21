<script lang="ts" setup>
	import AuthWrapper from '@/views/auth/components/AuthWrapper.vue';
	import AuthTabs from '@/views/auth/components/AuthTabs.vue';
	import AuthForm from '@/views/auth/components/AuthForm.vue';
	import VButton from '@/components/ui/VButton.vue';
	import VInput from '@/components/ui/VInput.vue';
	import AuthAgreement from '@/views/auth/components/AuthAgreement.vue';
	import { AuthSteps, useAuth } from '@/composables/useAuth';
	import { registerValidation } from '@/views/auth/components/validation';
	import AuthComplete from '@/views/auth/components/AuthComplete.vue';
	import { useAuthStore } from '@/stores/auth';

	const { loading, currentStep, changeStep, validateForm } = useAuth();
	const { form, register, sendCode } = useAuthStore();

	const start = ({ validate, values, setFieldError }) =>
		validateForm({ validate, setFieldError }, async () => {
			await sendCode({ ...values });
			changeStep(AuthSteps.CHECK);
		});
	const check = ({ validate, setFieldError, values }) =>
		validateForm({ validate, setFieldError }, async () => {
			await register({ ...values });
			changeStep(AuthSteps.COMPLETE);
		});
</script>

<template>
	<auth-wrapper
		class="register"
		:back="currentStep === AuthSteps.CHECK"
		:step="currentStep"
		@change="changeStep"
		:loading="loading"
	>
		<template #default>
			<auth-tabs />
			<auth-form :schema="registerValidation.start">
				<template #default="attrs">
					<v-input name="email" placeholder="E-mail" />
					<v-input name="password" placeholder="Пароль" type="password" />
					<v-button class="register__submit" @click="start(attrs)">Зарегистрироваться</v-button>
				</template>
			</auth-form>
			<auth-agreement />
		</template>

		<template #CHECK>
			<auth-form :schema="registerValidation.check" :initial="form">
				<template #header>Регистрация</template>
				<template #subheader>Введите одноразовый код который мы отправили вам на почту.</template>
				<template #default="attrs">
					<v-input name="code" placeholder="Одноразовый код" />
					<v-button class="register__submit" @click="check(attrs)">Подтвердить</v-button>
					<v-button class="v-button--link">Отправить код еще раз</v-button>
				</template>
			</auth-form>
		</template>

		<template #COMPLETE>
			<auth-complete>
				<template #header>Спасибо за регистрацию!</template>
				<template #subheader>Вы успешно зарегистрировались</template>
				<template #button>
					<v-button type="router-link" :to="{ name: 'login', params: { init: 'true' } }">
						Войти в IT School Innova
					</v-button>
				</template>
			</auth-complete>
		</template>
	</auth-wrapper>
</template>

<style lang="scss">
	.register {
		&__submit {
			margin-top: 19px;
		}
	}
</style>
