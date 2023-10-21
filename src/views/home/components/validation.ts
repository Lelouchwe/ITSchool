import { markRaw } from 'vue';
import { object, string } from 'yup';
const message: { [key: string]: string } = {
	required: 'Обязательное поле',
	gender: 'Выберите пол',
	status: 'Выберите статус',
	number: 'Код содержит только числа',
};

export const questionnaire = markRaw(
	object({
		name: string().required(message.required),
		birth: string().required(message.required),
		gender: string().required(message.gender),
		phone: string().required(message.required),
		status: string().required(message.status),
	}),
);
