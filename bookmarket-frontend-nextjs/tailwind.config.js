/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: "var(--color-brown)",
        yellow: "var(--color-yellow)",
        black: "var(--color-black)",
        'black-gray': "var(--color-black-gray)",
        white: "var(--color-white)",
        violet: "var(--color-violet)",
        "yellow-transparent": "var(--color-yellow-transparent)",
      },
      fontFamily: {
        rosarivo: ["Rosarivo", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        rosario: ["Rosario", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.6)",
        headering: "-1px 11px 23px 6px rgba(0, 0, 0, 0.4)",
      },
      textShadow: {
        xl: "2px 2px 4px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
