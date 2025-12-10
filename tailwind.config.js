// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        christmas: {
          red: '#DC2626',
          green: '#059669',
          gold: '#FCD34D',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'snow': 'snow 10s linear infinite',
        'gift-shake': 'gift-shake 0.5s ease-in-out',
        'gift-open': 'gift-open 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.2)' },
        },
        snow: {
          '0%': { transform: 'translateY(-10vh) translateX(0)' },
          '100%': { transform: 'translateY(100vh) translateX(100px)' },
        },
        'gift-shake': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
        },
        'gift-open': {
          '0%': { transform: 'scale(1) rotateY(0deg)' },
          '50%': { transform: 'scale(1.1) rotateY(180deg)' },
          '100%': { transform: 'scale(0) rotateY(360deg)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}