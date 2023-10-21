<script setup lang="ts">
	import AuthWrapper from '@/views/auth/components/AuthWrapper.vue';
	import AuthForm from '@/views/auth/components/AuthForm.vue';
	import VButton from '@/components/ui/VButton.vue';
	import VInput from '@/components/ui/VInput.vue';
	import { useAuth, AuthSteps } from '@/composables/useAuth';
	import { resetValidation } from '@/views/auth/components/validation';
	import AuthComplete from '@/views/auth/components/AuthComplete.vue';
	import { useAuthStore } from '@/stores/auth';

	const { loading, currentStep, changeStep, validateForm } = useAuth();
	const { form, reset, sendCode, checkCode } = useAuthStore();
	const submit = ({ validate, values, setFieldError }) =>
		validateForm({ validate, setFieldError }, async () => {
			await sendCode({ ...values, reset: true });
			changeStep(AuthSteps.CHECK);
		});
	const submitCheck = ({ validate, setFieldError, values }) =>
		validateForm({ validate, setFieldError }, async () => {
			await checkCode({ ...values });
			changeStep(AuthSteps.CONFIRM);
		});
	const submitSet = ({ validate, setFieldError, values }) =>
		validateForm({ validate, setFieldError }, async () => {
			await reset({ ...values });
			changeStep(AuthSteps.COMPLETE);
		});
</script>

<template>
	<auth-wrapper class="reset" back="/login" :step="currentStep" @change="changeStep" :loading="loading">
		<auth-form :schema="resetValidation.start">
			<template #header>Восстановление пароля</template>
			<template #subheader>Введите вашу почту и мы отправим на неё одноразовый код.</template>
			<template #default="attrs">
				<v-input name="email" placeholder="E-mail" />
				<v-button class="reset__submit" @click="submit(attrs)">Получить одноразовый код</v-button>
			</template>
		</auth-form>

		<template #CHECK>
			<auth-form :schema="resetValidation.check" :initial="form">
				<template #header>Восстановление пароля</template>
				<template #subheader>
					Введите одноразовый код, который мы выслали вам на почту {{ form.email }}
				</template>
				<template #default="attrs">
					<v-input name="code" placeholder="Одноразовый код" />
					<v-button class="reset__submit" @click="submitCheck(attrs)">Отправить</v-button>
					<v-button class="v-button--link">Отправить код еще раз</v-button>
				</template>
			</auth-form>
		</template>

		<template #CONFIRM>
			<auth-form :schema="resetValidation.confirm" :initial="form">
				<template #header>Восстановление пароля</template>
				<template #subheader> Придумайте новый пароль </template>
				<template #default="attrs">
					<v-input name="password" placeholder="Пароль" />
					<v-input name="passwordConfirm" placeholder="Повторить пароль" />
					<v-button class="reset__submit" @click="submitSet(attrs)">Изменить пароль</v-button>
				</template>
			</auth-form>
		</template>

		<template #COMPLETE>
			<auth-complete>
				<template #header>Пароль изменен</template>
				<template #subheader>Вы успешно изменили пароль от своего личного кабинета.</template>
				<template #button>
					<v-button type="router-link" to="/">Войти</v-button>
				</template>
			</auth-complete>
		</template>
	</auth-wrapper>
</template>

<style lang="scss">
	.reset {
		&__submit {
			margin-top: 16px;
		}
	}
</style>
