/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				kumarOne: ['Kumar One Outline'],
				kumarOneFill: ['Kumar One'],
				navItems: ['coda'],
				1: ['Cinzel'],
				2: ['Shadows Into Light'],
				3: ['Tiny5'],
				4: ['Playwrite MX'],
				teko: ['Teko'],
				neuton: ['Neuton'],
				nunito: ['Nunito Sans'],
				flowRounded: ['Flow Rounded'],
			},
			boxShadow: {
				custom: 'rgba(0, 0, 0, 0.4) 0px 30px 90px',
				hoverShadow: '-10px 10px 0px #000',
			},
			colors: {
				offWhite: '#fef6f3',
				offGreen: '#e0fcb4',
			},
		},
	},
	plugins: [],
};
