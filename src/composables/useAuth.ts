import { onMounted, ref } from 'vue';
import { errorHandler } from '@/helpers/features';

export enum AuthSteps {
	START = 'start',
	CHECK = 'check',
	CONFIRM = 'confirm',
	COMPLETE = 'complete',
}

const currentStep = ref<AuthSteps>(AuthSteps.START);
const loading = ref(false);

export const useAuth = () => {
	const changeStep = (step: AuthSteps) => (currentStep.value = step);
	const resetStep = () => (currentStep.value = AuthSteps.START);
	const validateForm = async (
		{
			validate,
			setFieldError,
			formErrors,
		}: {
			validate: Function;
			setFieldError?: Function;
			formErrors?: string[];
		},
		callback: Function,
	) => {
		const { valid } = await validate();
		if (valid) {
			try {
				loading.value = true;
				await callback();
			} catch (e) {
				if (!setFieldError) return;
				errorHandler({ message: e, formErrors }, (message: string, key: string) => setFieldError(key, message));
			} finally {
				loading.value = false;
			}
		}
	};

	onMounted(() => resetStep());
	return {
		loading,
		currentStep,
		changeStep,
		resetStep,
		validateForm,
	};
};
