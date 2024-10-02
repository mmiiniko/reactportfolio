/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'archivo': ['Archivo Black', 'sans-serif'],
        'noto': ['Noto Sans Warang Citi','sans-serif'],
        'anton': ['Anton','sans-serif'],
      },
    },
  },
  plugins: [],
}

