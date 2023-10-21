<script setup lang="ts">
	import AuthWrapper from '@/views/auth/components/AuthWrapper.vue';
	import AuthTabs from '@/views/auth/components/AuthTabs.vue';
	import AuthForm from '@/views/auth/components/AuthForm.vue';
	import VButton from '@/components/ui/VButton.vue';
	import VInput from '@/components/ui/VInput.vue';
	import VLink from '@/components/ui/VLink.vue';
	import { useAuth } from '@/composables/useAuth';
	import { loginValidation } from '@/views/auth/components/validation';
	import { useAuthStore } from '@/stores/auth';
	import { useRoute } from 'vue-router';

	const { loading, validateForm } = useAuth();
	const { login, form } = useAuthStore();
	const { params } = useRoute();
	console.log(params);
	const submit = ({ validate, values, setFieldError }) =>
		validateForm({ validate, setFieldError, formErrors: ['email', 'password'] }, async () => {
			await login({ ...values });
		});
</script>

<template>
	<auth-wrapper class="login" :loading="loading">
		<auth-tabs />
		<auth-form :schema="loginValidation.start" :initial="form">
			<template #default="attrs">
				<v-input name="email" placeholder="E-mail" />
				<v-input name="password" placeholder="Пароль" type="password" />
				<v-link class="login__reset" :to="{ name: 'reset' }">Не помню пароль</v-link>
				<v-button class="login__submit" @click="submit(attrs)">Войти</v-button>
			</template>
		</auth-form>
	</auth-wrapper>
</template>

<style lang="scss">
	.login {
		&__reset {
			margin-top: -9px;
		}
		&__submit {
			margin-top: 19px;
		}
	}
</style>
