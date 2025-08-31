/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				nav: '#1F2939',
                tag: '#F0FCF5'
			}
		}
	},
	plugins: []
}
