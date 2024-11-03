/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['"Open Sans"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
        robo: ['"Roboto"', "sans-serif"],
        bebas: ['"Bebas Neue"', "sans-serif"],
        pop: ['"Poppins"', "sans-serif"],
        rale: ['"Raleway"', "sans-serif"],
      },
    },
  },
  plugins: [require('daisyui'),],
}

