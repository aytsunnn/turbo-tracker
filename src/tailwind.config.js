/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      colors: {
        'switch-on': '#D9D9D9',
        'switch-off': '#515151',
        'thumb-on': '#515151',
        'thumb-off': '#D9D9D9',
      },
    },
  },
}
