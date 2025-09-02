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
				fadeInRight: {
					'0%': { opacity: '0', transform: 'translateX(100%)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				fadeInLeft: {
					'0%': { opacity: '0', transform: 'translateX(-100%)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				fadeInDown: {
					'0%': { opacity: '0', transform: 'translateY(-100%)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(100%)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				fadeInRight: 'fadeInRight 0.8s ease-out forwards',
				fadeInLeft: 'fadeInLeft 0.8s ease-out forwards',
				fadeInDown: 'fadeInDown 0.8s ease-out forwards',
				fadeInUp: 'fadeInUp 0.8s ease-out forwards'
			}
		}
	},
	plugins: []
}
