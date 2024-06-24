/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				kumarOne: ['Kumar One Outline'],
				kumarOneFill: ['Kumar One'],
				navItems: ['coda'],
			},
			boxShadow: {
				custom: 'rgba(0, 0, 0, 0.4) 0px 30px 90px',
				hoverShadow: '-10px 10px 0px #000',
			},
			colors: {
				offWhite: '#fef6f3',
			},
		},
	},
	plugins: [],
};
