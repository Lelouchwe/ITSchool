import { markRaw } from 'vue';
import { object, string, ref } from 'yup';

const message: { [key: string]: string } = {
	required: 'Обязательное поле',
	email: 'Введите валидный email',
	sync: 'Пароли не совпадают',
	code: 'Код должен содержать 4 символа',
	number: 'Код содержит только числа',
};
export const resetValidation = {
	start: markRaw(
		object({
			email: string().required(message.required).email(message.email),
		}),
	),
	check: markRaw(
		object({
			code: string().required(message.required).matches(/^\d+$/, message.number).length(4, message.code),
		}),
	),
	confirm: markRaw(
		object({
			password: string().required(message.required),
			passwordConfirm: string()
				.required(message.required)
				.oneOf([ref('password')], message.sync),
		}),
	),
};

export const loginValidation = {
	start: markRaw(
		object({
			email: string().required(message.required).email(message.email),
			password: string().required(message.required),
		}),
	),
};

export const registerValidation = {
	start: markRaw(
		object({
			email: string().required(message.required).email(message.email),
			password: string().required(message.required),
		}),
	),
	check: markRaw(
		object({
			code: string().required(message.required).matches(/^\d+$/, message.number).length(4, message.code),
		}),
	),
};
