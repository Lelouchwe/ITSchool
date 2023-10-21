<script lang="ts" setup>
	import { useField } from 'vee-validate';
	import VRadio from '@/components/ui/VRadio.vue';

	type ListRadio = {
		name: string;
		value: string;
	};
	interface IProps {
		value?: string;
		list: ListRadio[];
		name: string;
		label?: string;
		modelValue?: string;
		required?: boolean;
		showError?: boolean;
		disabled?: boolean;
		column?: boolean;
	}
	const props = withDefaults(defineProps<IProps>(), {
		required: false,
		showError: true,
	});

	const {
		value: inputValue,
		errorMessage: error,
		meta,
	} = useField(() => props.name, undefined, {
		initialValue: '',
		syncVModel: true,
	});
</script>
<template>
	<div class="v-radio" :class="{ error, success: meta.valid, column }">
		<div class="v-radio__group">
			<v-radio
				v-for="item in list"
				:key="item.value"
				:name="name"
				:label="item.name"
				:value="item.value"
				v-model="inputValue"
				:disabled="disabled"
				:error="error"
			/>
		</div>
		<div v-if="showError && error && error !== true" class="v-radio__message">
			{{ error }}
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.v-radio {
		&__group {
			display: flex;
			gap: 24px;
			flex-wrap: wrap;
		}
		&__message {
			margin-top: 10px;
			font-size: 14px;
			color: $color-error;
		}
		.column & {
			&__group {
				@media (max-width: 400px) {
					flex-direction: column;
				}
			}
		}
	}
</style>
