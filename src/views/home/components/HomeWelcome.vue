<script setup>
	import VButton from '@/components/ui/VButton.vue';
</script>

<template>
	<div class="home-welcome">
		<div class="home-welcome__left">
			<h1>
				IT School INNOVA <br />
				Учись новой профессии бесплатно <br />
				и получи возможность работать в IT
			</h1>
			<v-button type="router-link" :to="{ name: 'register' }" class="home-welcome__button"> Поступить </v-button>
		</div>
		<div class="home-welcome__right">
			<img src="@/assets/images/ScreenFirst.png" srcset="@/assets/images/ScreenFirst@2x.png 2x" alt="welcome" />
		</div>
	</div>
</template>

<style lang="scss">
	.home-welcome {
		display: flex;
		justify-content: center;
		gap: 33px;
		min-height: 478px;
		&__left {
			display: flex;
			flex-direction: column;
			justify-content: center;
			max-width: 600px;
			width: 100%;
			h1 {
				margin-bottom: 56px;
				font-size: 28px;
				font-style: normal;
				font-weight: 600;
				line-height: 34px;
			}
		}
		&__right {
			img {
				width: 100%;
				height: 100%;
				//max-width: 479px;
			}
		}
		&__button {
			max-width: 249px;
			width: 100%;
		}
		@media (max-width: 900px) {
			flex-direction: column;
			&__left {
				order: 1;
				h1 {
					font-size: 24px;
					line-height: 32px;
				}
			}
			&__button {
				margin: 0 auto;
			}
		}
		@media (min-width: 900px) {
			&__right {
				width: 100%;
				height: 100%;
				max-width: 479px;
			}
		}
	}
</style>
