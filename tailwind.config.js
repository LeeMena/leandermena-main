/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'luxury-black': '#0a0a0a',
        'luxury-dark': '#111111',
        'luxury-card': '#161616',
        'luxury-text': '#e8e8e8',
        'luxury-muted': '#8a8a8a',
        'luxury-border': '#2a2a2a',
        'gold': '#b8a080',
        'gold-light': '#c9b89a',
        'gold-dark': '#9a8060',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.95) 100%)',
      },
    },
  },
  plugins: [],
};
