const starlightPlugin = require('@astrojs/starlight-tailwind');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sohne: ["Sohne"],
				sohnemono: ["Sohne Mono"],
				audimat: ["Audimat"]
			  },
			backgroundImage: (theme) => ({
				"cardgrey": "linear-gradient(201deg, #58595B -25.37%, #212121 75.5%)",
				"gradient-releases": "linear-gradient(245deg, #00c0e7, #a34fde)",
				"gradient-blue":
				  "linear-gradient(225deg, #405BFF -5.3%, #3DD6F5 112.86%)",
				"gradient-targeting":
				  "linear-gradient(222deg,#18bdde 1.56%,#405bff 96.51%)",
				"gradient-experimentation":
				  "linear-gradient(222deg,#c0d600 -2.68%,#05b0d2 92.81%);",
				"gradient-mobile": "linear-gradient(65deg,#ff386b 3.6%,#ffaf38 98.81%)",
				"market-header":
				  "linear-gradient(108.59deg, #212121 2.18%, #000000 75.85%)",
				"gradient-airways":
				  "linear-gradient(131deg, #A34FDE -15.82%, #405BFF 118.85%)",
				card1: "linear-gradient(210deg, #06F -22.78%, #3DD6F5 110.31%)",
				card2: "linear-gradient(193.42deg, #A34FDE -4.63%, #3DD6F5 138.52%)",
				card3: "linear-gradient(187.72deg, #FF386B -57.74%, #EBFF38 222.08%)",
				card4bottom:
				  "linear-gradient(39.47deg, #A34FDE -17.19%, #FF386B 148.9%)",
				bankblue: "linear-gradient(225deg, #3DD6F5 -5.3%, #405BFF 112.86%)",
			  }),
		},
	},
	plugins: [starlightPlugin()],
}
