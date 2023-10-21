<template>
	<div class="auth-agreement">
		<p>Нажимая кнопку, принимаю условия</p>
		<v-link underline to="/">пользовательского соглашения.</v-link>
	</div>
</template>
<script setup>
	import VLink from '@/components/ui/VLink.vue';
</script>

<style lang="scss" scoped>
	.auth-agreement {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 24px;
	}
</style>
