<script setup>
	import HomeWelcome from '@/views/home/components/HomeWelcome.vue';
	import HomeQuestionnaire from '@/views/home/components/HomeQuestionnaire.vue';
	import HomeCourses from '@/views/home/components/HomeCourses.vue';
	import { useAuthStore } from '@/stores/auth';

	const { state } = useAuthStore();
</script>

<template>
	<home-courses v-if="state.user" />
	<home-questionnaire v-else-if="state.loggedIn" />
	<home-welcome v-else />
</template>
