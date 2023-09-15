/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
          light: '#E4E3E3',
          default: '#84A9AC',
          dark: '#3B6978',
          darker: '#204051',
    },
  },
  plugins: [],

} }
