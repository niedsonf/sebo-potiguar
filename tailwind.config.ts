import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fff',

        'gray': {
          100: '#E1E1E6',
          300: '#C4C4CC',
          400: '#8D8D99',
          500: '#7C7C8A',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
        },

        'green': {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },

        'red': {
          300: '#F75A68',
          500: '#AB222E',
          700: '#7A1921',
        },

        'yellow': {
          300: '#E8E337',
          500: '#E5DE00',
          700: '#E6CC00',
        },
      },
      keyframes: {
        slideBottomToTop: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        slideTopToBottom: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        slideRightToLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideLeftToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideRightToLeft2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideLeftToRight2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeOutScale: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.9)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'slide-bottom-to-top': 'slideBottomToTop 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-top-to-bottom': 'slideTopToBottom 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-right-to-left': 'slideRightToLeft 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-left-to-right': 'slideLeftToRight 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-right-to-left2': 'slideRightToLeft2 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-left-to-right2': 'slideLeftToRight2 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-scale': 'fadeInScale 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-out-scale': 'fadeOutScale 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in': 'fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-out': 'fadeOut 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
    },
  },
  plugins: [],
};
export default config;
