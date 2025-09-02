/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				nav: '#1F2939',
				tag: '#F0FCF5'
			},
			keyframes: {
				blink: {
					'0%, 50%, 100%': { opacity: '1' },
					'25%, 75%': { opacity: '0' }
				}
			},
			animation: {
				blink: 'blink 1s step-start infinite'
			}
		}
	},
	plugins: []
}
