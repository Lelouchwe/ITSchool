<script setup lang="ts">
	import { useField } from 'vee-validate';
	import { ref, computed } from 'vue';
	import VIcon from '@/components/ui/VIcon.vue';

	interface IProps {
		type?: string;
		inputType?: string;
		value?: string;
		name: string;
		label?: string;
		placeholder?: string;
		mask?: string;
		modelValue?: string;
		required?: boolean;
		showError?: boolean;
		disabled?: boolean;
	}
	const props = withDefaults(defineProps<IProps>(), {
		type: 'text',
		inputType: 'input',
		required: false,
		showError: true,
	});

	const {
		value: inputValue,
		errorMessage: error,
		handleBlur,
		handleChange,
		meta,
	} = useField(() => props.name, undefined, {
		syncVModel: true,
	});

	const isVisiblePass = ref(false);
	const bullet = computed(() => props.type === 'password' && inputValue.value && !isVisiblePass.value);
	const icon = computed(() => props.type === 'password');
</script>

<template>
	<div class="v-input v-input__group" :class="{ error, success: meta.valid, bullet }">
		<div class="v-input__wrapper">
			<label :for="name" :class="{ required }">{{ label }}</label>
			<component
				:is="inputType!"
				class="v-input__field"
				:class="{ icon }"
				:type="isVisiblePass ? 'text' : type"
				:name="name"
				:id="name"
				:value="inputValue"
				:placeholder="placeholder"
				:disabled="disabled"
				@input="handleChange"
				@blur="handleBlur"
			/>
			<div class="v-input__icon" v-if="type === 'password'" @click="isVisiblePass = !isVisiblePass">
				<v-icon :icon="isVisiblePass ? 'eye-open' : 'eye'" />
			</div>
		</div>
		<div v-if="showError && error && error !== true" class="v-input__message">
			{{ error }}
		</div>
	</div>
</template>

<style scoped lang="scss">
	.v-input {
		&__group {
			position: relative;
		}
		&__wrapper {
			position: relative;
			display: flex;
			align-items: center;
			textarea {
				height: 100px;
			}
		}
		&__field {
			font-size: 17px;
			font-style: normal;
			font-weight: 400;
			line-height: 22px;
			padding: 10px 16px;
			border-radius: 2px;
			border: 1px solid $input-primary-stroke;
			background: $input-primary;
			width: 100%;
			transition: border 0.3s ease-in-out;
			color: $color-main;
			letter-spacing: -0.41px;
			&:focus {
				outline: none;
				border-color: $input-focused-stroke;
			}
			&::placeholder {
				color: $typography-disable;
			}
			&:not(:placeholder-shown) {
				border-color: $input-focused-stroke;
			}
			&.icon {
				padding-right: 50px;
			}
			&:disabled {
				background-color: $input-primary-disabled;
				border-color: $input-disabled-stroke;
			}
		}
		&__icon {
			position: absolute;
			display: flex;
			align-items: center;
			right: 16px;
			cursor: pointer;
			svg {
				width: 16px;
				height: 16px;
			}
		}
		&__message {
			margin-top: 4px;
			font-size: 14px;
			color: $color-error;
		}
		.error & {
			&__field {
				border-color: $input-error;
			}
		}
		.bullet & {
			&__field {
				letter-spacing: 1px;
			}
		}
	}
</style>
