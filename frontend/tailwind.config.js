/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			height: {
				18: '4.5rem'
			},
			width: {
				18: '4.5rem',
				web: '1048px'
			},
			spacing: {
				18: '4.5rem'
			},
			maxWidth: {
				web: '1090px'
			},
			screens: {
				mG: '500px'
			},
			aspectRatio: {
				'4/3': '4 / 3'
			},
			keyframes: {
				slideIn: {
					from: { transform: 'translateX(-100%)' },
					to: { transform: 'translateX(0)' }
				},
				slideOut: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' }
				},
				slideDown: {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				slideUp: {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 }
				}
			},
			animation: {
				slideIn: 'slideIn 300ms ease-in',
				slideOut: 'slideOut 300ms ease-in',
				slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
				slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)'
			},
			colors: {
				primary: '#1f3748',
				secondary: '#051423',
				gray_1: '#58585A',
				gray_text: '#414042',
				yellow_1: '#fdb813',
				icon_blue: '#627680',
				title_blue: '#4eb1da'
			}
		}
	}
};
