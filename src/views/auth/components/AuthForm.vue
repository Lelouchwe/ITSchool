<script lang="ts" setup>
	import { useForm, useIsFormValid } from 'vee-validate';

	interface IProps {
		schema: object;
		initial?: object;
	}
	const props = defineProps<IProps>();

	const { validate, resetForm, values, setFieldError } = useForm({
		initialValues: props.initial,
		validationSchema: props.schema,
	});
	const valid = useIsFormValid();
</script>
<template>
	<div class="auth-form">
		<h2 class="auth-form__header" v-if="$slots.header">
			<slot name="header"></slot>
		</h2>
		<h3 class="auth-form__subheader" v-if="$slots.subheader">
			<slot name="subheader"></slot>
		</h3>
		<div class="auth-form__main">
			<slot
				:values="values"
				:valid="valid"
				:validate="validate"
				:resetForm="resetForm"
				:setFieldError="setFieldError"
			/>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.auth-form {
		max-width: 352px;
		width: 100%;
		&__header {
			font-size: 28px;
			font-style: normal;
			font-weight: 600;
			line-height: 34px;
			color: $color-main;
			text-align: center;
			margin-bottom: 24px;
		}
		&__subheader {
			font-size: 17px;
			font-style: normal;
			font-weight: 400;
			line-height: 22px;
			color: $color-main;
			text-align: center;
			margin-bottom: 44px;
			letter-spacing: -0.41px;
		}
		&__main {
			display: grid;
			gap: 24px;
		}
	}
</style>
