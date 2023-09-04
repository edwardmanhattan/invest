/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'blue-1': '#18A0FB',
				'blue-2': '#0B4D70',
				'blue-3': '#062137'
			},
			aspectRatio: {
				hero: '3 / 1'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
