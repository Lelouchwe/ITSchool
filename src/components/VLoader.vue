<template>
	<svg
		class="loader"
		xmlns="http://www.w3.org/2000/svg"
		width="120px"
		height="120px"
		viewBox="0 0 100 100"
		preserveAspectRatio="xMidYMid"
	>
		<circle cx="80" cy="50" r="5" fill="#fe0183">
			<animate attributeName="cx" values="80;50" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
			<animate attributeName="cy" values="50;80" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
			<animate
				attributeName="fill"
				values="#fe0183;#b83dad"
				keyTimes="0;1"
				dur="1s"
				repeatCount="indefinite"
			></animate>
		</circle>
		<circle cx="50" cy="80" r="5" fill="#b83dad">
			<animate attributeName="cx" values="50;20" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
			<animate
				attributeName="cy"
				values="80;50.00000000000001"
				keyTimes="0;1"
				dur="1s"
				repeatCount="indefinite"
			></animate>
			<animate
				attributeName="fill"
				values="#b83dad;#8452ca"
				keyTimes="0;1"
				dur="1s"
				repeatCount="indefinite"
			></animate>
		</circle>
		<circle cx="20" cy="50.00000000000001" r="5" fill="#8452ca">
			<animate
				attributeName="cx"
				values="20;49.99999999999999"
				keyTimes="0;1"
				dur="1s"
				repeatCount="indefinite"
			></animate>
			<animate
				attributeName="cy"
				values="50.00000000000001;20"
				keyTimes="0;1"
				dur="1s"
				repeatCount="indefinite"
			></animate>
			<animate
				attributeName="fill"
				values="#8452ca;#515fe2"
				keyTimes="0;1"
				dur="1s"
				repeatCount="indefinite"
			></animate>
		</circle>
		<circle cx="49.99999999999999" cy="20" r="5" fill="#515fe2">
			<animate
				attributeName="cx"
				values="49.99999999999999;80"
				keyTimes="0;1"
				dur="1s"
				repeatCount="indefinite"
			></animate>
			<animate
				attributeName="cy"
				values="20;49.99999999999999"
				keyTimes="0;1"
				dur="1s"
				repeatCount="indefinite"
			></animate>
			<animate
				attributeName="fill"
				values="#515fe2;#fe0183"
				keyTimes="0;1"
				dur="1s"
				repeatCount="indefinite"
			></animate>
		</circle>
	</svg>
</template>

<style lang="scss" scoped>
	.loader {
		z-index: 1;
	}
</style>
