/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5A67D8',      // bleu vif
        secondary: '#FF6B6B',    // corail
        accent: '#34D399',       // vert menthe
      },
      keyframes: {
        // fait défiler le gradient de fond
        gradient: {
          '0%,100%': { 'background-position': '0% 50%' },
          '50%':     { 'background-position': '100% 50%' },
        },
        // pour le texte
        textGradient: {
          '0%,100%': { 'background-position': '0% 100%' },
          '50%':     { 'background-position': '100% 0%' },
        },
      },
      animation: {
        'gradient-bg':   'gradient 10s ease infinite',
        'text-gradient': 'textGradient 5s ease infinite',
        'pulse-slow':    'pulse 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
