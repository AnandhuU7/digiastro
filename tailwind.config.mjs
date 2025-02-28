/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		keyframes: {
		  slideAnimation: {
			'0%': { transform: 'translateX(0%)' },
			'100%': { transform: 'translateX(-50%)' },
		  },
		  shine: {
			'100%': { left: '125%', opacity: '1' },
		  },
		},
		animation: {
		  slideAnimation: 'slideAnimation 30s linear infinite',
		  shine: 'shine 1s',
		},
	  },
	},
	plugins: [],
  };