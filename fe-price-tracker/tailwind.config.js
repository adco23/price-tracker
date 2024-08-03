/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#7fd6dc'
        },
        secondary: {
          default: '#e6b6fd'
        },
        yellow: {
          default: '#fbdd65'
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        spongy: {
          '0%, 100%': { transform: 'scale(1, 1)' },
          '33%': { transform: 'scale(0.95, 1.05)' },
          '66%': { transform: 'scale(1.05, 0.95)' }
        },
        rotation: {
          '0%': { transform: 'rotate(0) scale(1)' },
          '20%': { transform: 'rotate(60deg) scale(0.93)' },
          '55%': { transform: 'rotate(35deg) scale(0.97)' },
          '80%': { transform: 'rotate(48deg) scale(0.94)' },
          '100%': { transform: 'rotate(45deg) scale(0.95)' }
        },
        'rotation-reverse': {
          '100%': { transform: 'rotate(45deg) scale(0.95)' },
          '20%': { transform: 'rotate(-15deg)' },
          '55%': { transform: 'rotate(10deg)' },
          '80%': { transform: 'rotate(-3deg)' },
          '100%': { transform: 'rotate(0) scale(1)' },
        },
      },
      animation: {
        spongy: 'spongy 0.4s ease-out forwards 0.1s',
        rotation: 'rotation 0.4s ease-out forwards',
        'rotation-reverse': 'rotation-reverse 0.4s ease-out forwards',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}
