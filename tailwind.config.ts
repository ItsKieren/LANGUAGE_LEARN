// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'y2k-pink': {
          DEFAULT: '#FF69B4',
          light: '#FFB6C1',
          dark: '#F91880',
          accent: '#FFAED7',
          deepDark: '#C70059',
        },
        'y2k-bg': {
          DEFAULT: '#FFF5FA',
          card: '#FFFFFF',
          alt: '#FFEBF2',
        },
        'y2k-text': {
          DEFAULT: '#4A4A4A',
          header: '#2A0B3E',
          muted: '#8B6B7B',
          onPink: '#FFF5FA', // Text for on dark pink backgrounds
          code: '#2A0B3E',
        },
        'y2k-border': {
          DEFAULT: '#FFACC7',
          dark: '#F91880',
        },
        'y2k-accent': {
          blue: '#A0D2DB',
          purple: '#D6BCFA',
        },
      },
      fontFamily: {
        'display': ['"Bungee"', 'cursive'],
        'heading': ['"Poppins"', 'sans-serif'],
        'body': ['"Poppins"', 'sans-serif'],
        'pixel': ['"Press Start 2P"', 'cursive'],
        'japanese': ['"Noto Sans JP"', 'sans-serif'],
      },
      borderRadius: {
        'y2k': '10px',
        'y2k-lg': '16px',
        'y2k-sm': '6px',
      },
      boxShadow: {
        'y2k-hard': '4px 4px 0px rgba(0, 0, 0, 0.65)',
        'y2k-hard-pink': '3px 3px 0px var(--tw-shadow-color, #C70059)',
        'y2k-soft': '0 0 12px 1px rgba(255, 182, 193, 0.4), 0 0 20px 4px rgba(255, 182, 193, 0.3)',
        'y2k-inner': 'inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 4px rgba(255, 255, 255, 0.6)',
        'y2k-button': '2px 2px 0px var(--tw-shadow-color, #2A0B3E)',
        'y2k-glow-strong': '0 0 6px var(--tw-shadow-color, #FFB6C1), 0 0 12px var(--tw-shadow-color, #FF69B4)',
        // Ensure this is correctly named and used.
        // If you want a specific 'md' glow, it should be defined here.
        // For simplicity, if 'y2k-soft' or 'y2k-glow-strong' can be used, that's preferable.
        // Let's assume we want a distinct medium glow for the accordion hover:
        'y2k-glow-pink-md': '0 0 8px rgba(255,105,180,0.5), 0 0 15px rgba(249,24,128,0.4)',
      },
      textShadow: {
        'hard-sm': '1px 1px 0px rgba(0,0,0,0.6)',
        'hard-md': '1.5px 1.5px 0px rgba(0,0,0,0.7)',
        'pink-glow-sm': '0 0 4px #FFB6C1, 0 0 7px #FF69B4',
        'pink-glow-header': '0 0 5px #FFB6C1, 0 0 8px #FF69B4',
      },
      keyframes: {
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'slide-in-left': { '0%': { transform: 'translateX(-25px)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        'slide-in-right': { '0%': { transform: 'translateX(25px)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        'pulse-y2k': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.95' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.7s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'pulse-y2k': 'pulse-y2k 2.5s infinite ease-in-out',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }: { addUtilities: any, theme: any }) {
      const newUtilities = {
        '.text-shadow-hard-sm': {
          textShadow: theme('textShadow.hard-sm'),
        },
        '.text-shadow-hard-md': {
          textShadow: theme('textShadow.hard-md'),
        },
         '.text-shadow-pink-glow-sm': {
          textShadow: theme('textShadow.pink-glow-sm'),
        },
        '.text-shadow-pink-glow-header': {
          textShadow: theme('textShadow.pink-glow-header'),
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

export default config;