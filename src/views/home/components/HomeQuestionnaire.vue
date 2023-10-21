<script setup>
	import VInput from '@/components/ui/VInput.vue';
	import VButton from '@/components/ui/VButton.vue';
	import VRadioGroup from '@/components/ui/VRadioGroup.vue';
	import { questionnaire } from '@/views/home/components/validation';
	import { Form } from 'vee-validate';
	import { useAuthStore } from '@/stores/auth';

	const { state } = useAuthStore();

	const genders = [
		{ name: 'Мужской', value: 'male' },
		{ name: 'Женский', value: 'female' },
	];
	const status = [
		{ name: 'Учащийся', value: '0' },
		{ name: 'Самозанятый', value: '1' },
		{ name: 'Работаю', value: '2' },
		{ name: 'В поисках работы', value: '3' },
		{ name: 'Другое', value: '4' },
	];
	const onSubmit = values => {
		console.log(values);
		state.user = {};
	};
</script>
<template>
	<div class="home-questionnaire">
		<h1 class="home-questionnaire__header">Для того чтобы начать обучение необходимо заполнить поля ниже</h1>
		<Form :validation-schema="questionnaire" @submit="onSubmit" class="home-questionnaire__main">
			<div class="home-questionnaire__section">
				<h3 class="home-questionnaire__section-header">Личная информация</h3>
				<v-input name="name" placeholder="Фамилия Имя Отчество*" />
				<v-input name="birth" placeholder="Дата рождения дд.мм.гг*" />
				<v-radio-group name="gender" :list="genders" :show-error="false" />
				<v-input name="phone" placeholder="Номер телефона в формате +7*" />
			</div>
			<div class="home-questionnaire__section">
				<h3 class="home-questionnaire__section-header">Ваш статус</h3>
				<v-radio-group name="status" :list="status" column :show-error="false" />
			</div>
			<div class="home-questionnaire__section">
				<h3 class="home-questionnaire__section-header">Дополнительная информация</h3>
				<v-input input-type="textarea" name="text" placeholder="О себе" />
			</div>
			<div class="home-questionnaire__section">
				<p class="home-questionnaire__notes">
					Нажимая на кнопку "Перейти к обучению", вы даёте согласие на обработку персональных данных и
					подтверждаете, что ознакомились с информацией
				</p>
				<v-button class="home-questionnaire__button" type-button="submit">Перейти к обучению</v-button>
			</div>
		</Form>
	</div>
</template>
<style lang="scss">
	.home-questionnaire {
		background-color: $color-primary;
		padding: 48px 64px 80px 64px;
		display: grid;
		gap: 48px;
		border-radius: 8px;
		&__header {
			font-size: 28px;
			font-style: normal;
			font-weight: 600;
			line-height: 34px;
			color: $color-main;
		}
		&__main {
			display: grid;
			gap: 56px;
			max-width: 1000px;
		}
		&__section {
			display: grid;
			gap: 32px;
			max-width: 780px;
		}
		&__section-header {
			font-size: 20px;
			font-style: normal;
			font-weight: 500;
			line-height: 24px;
		}
		&__notes {
			color: $typography-secondary;
			font-size: 17px;
			font-style: normal;
			font-weight: 400;
			line-height: 22px;
			letter-spacing: -0.41px;
			max-width: 680px;
		}
		&__button {
			max-width: 352px;
		}
		@media (max-width: 600px) {
			padding: 40px 16px;
			gap: 32px;
			&__header {
				font-size: 24px;
			}
			&__main {
				gap: 48px;
			}
			&__section {
				gap: 24px;
			}
		}
	}
</style>
