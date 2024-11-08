/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-black': '#262626',
        'dark-black': '#1a1a1a',
        'light2-black': '#333333',
        'text-white': '#a6adbb',
        'text-white2': '#dadada',
        'gray1': '#3b444b',
        'gray2': '#414a4c'
      },
      fontFamily: {
        'primary': ['ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
      }
    },
  },
  plugins: [],
}