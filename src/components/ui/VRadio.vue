<script lang="ts" setup>
	interface IProps {
		value: string;
		name?: string;
		label?: string;
		disabled?: boolean;
		error?: string;
	}
	defineProps<IProps>();

	const modelValue = defineModel();
</script>
<template>
	<label class="v-radio" :class="{ disabled, error }">
		<input
			class="v-radio__input"
			type="radio"
			v-model="modelValue"
			:name="name"
			:id="name"
			:value="value"
			:disabled="disabled"
		/>
		<span class="v-radio__label">
			<slot>{{ label }}</slot>
		</span>
	</label>
</template>

<style lang="scss" scoped>
	.v-radio {
		display: flex;
		align-items: center;
		gap: 8px;
		cursor: pointer;
		&__input {
			height: 16px;
			width: 16px;
			&[type='radio'] {
				appearance: none;
				margin: 0;
				font: inherit;
				border: 1px solid $button-disable-stroke;
				border-radius: 50%;
				transition: 0.3s;
				cursor: pointer;
				display: grid;
				place-content: center;
				&:hover {
					border-color: $button-hover;
				}
				&::before {
					content: '';
					width: 7px;
					height: 7px;
					border-radius: 50%;
					transform: scale(0);
					transition: 120ms transform ease-in-out;
					box-shadow: inset 1em 1em $button-primary;
				}
				&:checked {
					border-color: $button-primary;
					&::before {
						transform: scale(1);
					}
				}
			}
		}
		&__label {
			color: $color-main;
			font-size: 17px;
			font-style: normal;
			font-weight: 400;
			line-height: 22px;
			letter-spacing: -0.41px;
		}
		&.disabled {
			cursor: default;
		}
		&.disabled & {
			&__input {
				cursor: default;
				background-color: $button-disable;
				border-color: $typography-disable;
				&[type='radio'] {
					&::before {
						box-shadow: inset 1em 1em $typography-disable;
					}
				}
			}
			&__label {
				color: $typography-disable;
			}
		}
		&.error & {
			&__input {
				border-color: $input-error;
			}
			&__label {
				color: $input-error;
			}
		}
	}
</style>
