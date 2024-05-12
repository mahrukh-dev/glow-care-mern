/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'glow-green': '#5F6C37',
        'dark-green': '#283618',
        'light-yellow': '#FEF9E0',
        'light-orange': '#DDA15C',
        'dark-orange': '#BB6C25',
      },
    },
  },
  variants: {},
  plugins: [],
}