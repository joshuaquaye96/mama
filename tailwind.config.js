/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#3FA7A8',
        deepblue: '#3A6091',
        skyblue: '#01A2D0',
        brightyellow: '#FEE30A'
      },
      fontFamily: {
        heading: ['Fredoka', 'Baloo', 'sans-serif'],
        body: ['Poppins', 'Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}