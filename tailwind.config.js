/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#b8a080',
        'gold-light': '#d9c7a9',
        'luxury-black': '#080807',
        'luxury-dark': '#111110',
        'luxury-card': '#161614',
        'luxury-text': '#e8e6e1',
        'luxury-muted': '#8a8880',
        'luxury-border': '#262523',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
