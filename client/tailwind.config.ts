// @ts-nocheck
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const primary = '#FF9902'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],

	darkMode: 'media',

	theme: {
		colors: {
			primary,
			black: colors.black,
			white: colors.white,
			green: colors.green,
			red: colors.red,
			extraRed: '#ff0000',
			firebrick: '#b22222',
			tomato: '#ff6347',
			darkYellow: '#b0965f',
			primary: '#FF9902',
			secondary: '#161D25',
			'text-color': '#2E3239',
			'bg-color': '#F2F2F5',
			aqua: '#268697',
			gray: {
				300: '#d9dae8',
				500: '#999AA5',
				600: '#66676E',
				700: '#39393f',
				800: '#242529',
				900: '#191B1F',
				950: '#101215'
			},
			transparent: colors.transparent,
			yellow: {
				700: '#F5C521'
			}
		},

		container: {
			center: true,
			padding: {
				DEFAULT: '10px'
			}
		},

		screens: {
			sm: '576px', //container 540px
			md: '768px', //container 720px
			lg: '992px', //container 960px
			xl: '1200px', //container 1140px
			xxl: '1400px' //container 1320px
		},

		extend: {
			backgroundSize: {
				auto: 'auto',
				cover: 'cover',
				contain: 'contain'
			},

			boxShadow: {
				black: '0px 0px 8px 1px rgba(0, 0, 0, 0.39)',
				xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
				sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
				md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
				'3xl': '0px 5px 10px 2px rgba(34, 60, 80, 0.2)'
			},

			flex: {
				auto: '1 1 auto'
			},

			fontSize: {
				DEFAULT: '1rem',
				0.7: '0.7rem',
				1.2: '1.2rem',
				1.5: '1.5rem',
				2: '2rem',
				'2lg': '1.38rem'
			},

			fontWeight: {
				inherit: 'inherit',
				100: '100',
				300: '300',
				500: '500',
				700: '700',
				800: '800',
				900: '900'
			},

			lineHeight: {
				DEFAULT: 'normal',
				1: '1rem',
				2: '2rem',
				3: '3rem',
				4: '4rem',
				5: '5rem'
			},

			spacing: {
				0.5: '0.12rem',
				layout: '2.75rem'
			},

			cursor: {
				DEFAULT: 'DEFAULT',
				pointer: 'pointer'
			},

			backgroundPosition: {
				bottom: 'bottom',
				center: 'center',
				left: 'left',
				right: 'right',
				top: 'top'
			},

			border: {
				solid: '1px solid black'
			},

			borderRadius: {
				max: '9999px',
				image: '0.5rem',
				layout: '0.8rem'
			},

			borderStyle: {
				DEFAULT: 'solid'
			},

			borderColor: {
				DEFAULT: 'black'
			},

			borderWidth: {
				DEFAULT: '1px',
				2: '2px'
			},

			opacity: {
				0: '0',
				0.2: '0.2',
				0.4: '0.4',
				0.6: '0.6',
				0.8: '0.8',
				1: '1'
			},

			margin: {
				'0auto': '0 auto',
				auto: 'auto'
			},

			zIndex: {
				0: '0',
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5'
			},

			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},

			transitionDuration: {
				DEFAULT: '200ms'
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				},

				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},

			animation: {
				fadeIn: 'fadeIn .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
				rotate: 'spin 5s infinite linear'
			}
		}
	},
	plugins: []
}

export default config
