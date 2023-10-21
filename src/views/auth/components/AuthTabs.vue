<template>
	<nav class="auth-tabs">
		<router-link class="auth-tabs__link" to="/login">Войти</router-link>
		<router-link class="auth-tabs__link" to="/register">Зарегистрироваться</router-link>
	</nav>
</template>
<style lang="scss" scoped>
	.auth-tabs {
		display: flex;
		justify-content: center;
		gap: 40px;
		margin-bottom: 32px;
		&__link {
			position: relative;
			font-size: 17px;
			font-style: normal;
			font-weight: 400;
			line-height: 22px;
			padding: 12px 0;
			transition: 0.3s ease-in-out;
			&:hover {
				color: $button-hover;
			}
			&.router-link-active {
				color: $button-primary;
				&:after {
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					height: 2px;
					width: 100%;
					background-color: $button-primary;
				}
			}
		}
	}
</style>
