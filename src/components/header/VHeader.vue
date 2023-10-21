<script setup>
	import VLogo from '@/components/header/VLogo.vue';
	import VProfile from '@/components/header/VProfile.vue';
</script>
<template>
	<header class="header">
		<v-logo class="header__logo" />
		<div class="header__spacer" />
		<v-profile class="header__profile" />
	</header>
</template>
<style lang="scss">
	.header {
		display: grid;
		grid-template-columns: auto 1fr auto;
		padding: 30px 48px;
		@media (max-width: 600px) {
			padding: 30px 16px;
		}
	}
</style>
