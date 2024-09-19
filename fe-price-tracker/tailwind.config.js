/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#7fd6dc",
          50: "#f0fbfa",
          100: "#d8f5f5",
          200: "#b6e9eb",
          300: "#7fd6dc",
          400: "#49bdc7",
          500: "#2da1ad",
          600: "#298291",
          700: "#276a77",
          800: "#275763",
          900: "#254954",
          950: "#133039",
        },
        secondary: {
          default: "#e6b6fd",
          50: "#fcf5ff",
          100: "#f7e8ff",
          200: "#f1d6fe",
          300: "#e6b6fd",
          400: "#d686fa",
          500: "#c657f5",
          600: "#b536e7",
          700: "#9e24cc",
          800: "#8423a6",
          900: "#6c1d86",
          950: "#4c0863",
        },
        "energy-yellow": {
          default: "#fbdd65",
          50: "#fefbe8",
          100: "#fdf6c4",
          200: "#fcea8c",
          300: "#fbdd65",
          400: "#f7c118",
          500: "#e7a80b",
          600: "#c78107",
          700: "#9f5c09",
          800: "#834810",
          900: "#703b13",
          950: "#411e07",
        },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      keyframes: {
        spongy: {
          "0%, 100%": { transform: "scale(1, 1)" },
          "33%": { transform: "scale(0.95, 1.05)" },
          "66%": { transform: "scale(1.05, 0.95)" },
        },
        rotation: {
          "0%": { transform: "rotate(0) scale(1)" },
          "20%": { transform: "rotate(60deg) scale(0.93)" },
          "55%": { transform: "rotate(35deg) scale(0.97)" },
          "80%": { transform: "rotate(48deg) scale(0.94)" },
          "100%": { transform: "rotate(45deg) scale(0.95)" },
        },
        "rotation-reverse": {
          "100%": { transform: "rotate(45deg) scale(0.95)" },
          "20%": { transform: "rotate(-15deg)" },
          "55%": { transform: "rotate(10deg)" },
          "80%": { transform: "rotate(-3deg)" },
          "100%": { transform: "rotate(0) scale(1)" },
        },
      },
      animation: {
        spongy: "spongy 0.4s ease-out forwards 0.1s",
        rotation: "rotation 0.4s ease-out forwards",
        "rotation-reverse": "rotation-reverse 0.4s ease-out forwards",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
