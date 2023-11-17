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
		},
	},
	plugins: [starlightPlugin()],
}
