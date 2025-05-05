import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
	darkMode: 'class',
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	prefix: "",
	theme: {
		container: { /* Defaults */ },
		extend: {
            fontFamily: { /* Defaults */ },
            fontWeight: { /* Defaults */ },
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)',
                'glow-primary-xs': '0 0 4px hsl(var(--primary) / 0.8)',
                'glow-primary-sm': '0 0 8px hsl(var(--primary) / 0.9)', // Pink Glow
                'glow-primary-md': '0 0 12px hsl(var(--primary) / 1)',
                'glow-secondary-xs': '0 0 4px hsl(var(--secondary) / 0.8)',
                'glow-secondary-sm': '0 0 8px hsl(var(--secondary) / 0.9)', // Cyan Glow
                'glow-secondary-md': '0 0 12px hsl(var(--secondary) / 1)',
                'glow-accent-xs': '0 0 4px hsl(var(--accent) / 0.8)',
                'glow-accent-sm': '0 0 8px hsl(var(--accent) / 0.9)',   // Green Glow
                'glow-white-sm': '0 0 10px rgba(255, 255, 255, 0.6)',
            },
			colors: { // Map to CSS variables
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' }, // Pink
				secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))'}, // Cyan
				destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' }, // Red
				muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
				accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' }, // Lime Green
				popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
				card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
			},
			borderRadius: { /* Use radius variable */ },
            boxShadow: {
                // Neon Glows using new palette vars
                'glow-primary-sm': '0 0 10px 1px hsl(var(--primary) / 0.75)', // Pink
                'glow-primary-md': '0 0 18px 3px hsl(var(--primary) / 0.75)',
                'glow-secondary-sm': '0 0 10px 1px hsl(var(--secondary) / 0.75)', // Cyan
                'glow-secondary-md': '0 0 18px 3px hsl(var(--secondary) / 0.75)',
                'glow-accent-sm': '0 0 10px 1px hsl(var(--accent) / 0.75)',   // Green
                'inner-glow': 'inset 0 0 8px 1px hsl(var(--foreground) / 0.08)',
            },
			keyframes: { /* Keep keyframes */ },
			animation: { /* Keep animations */ }
		}
	},
	plugins: [
        require("tailwindcss-animate"),
        plugin(function({ matchUtilities, theme }) {
            matchUtilities( { 'text-shadow': (value) => ({ textShadow: value, }), }, { values: theme('textShadow') } )
          }),
    ],
} satisfies Config;