/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        'primary-dark': 'hsl(178, 100%, 50%)',
        'primary-light': 'hsla(0, 0%, 35%, 0.39)',
      },
    },
  },
  plugins: [],
}
