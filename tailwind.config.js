/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}' /* src folder, for example */],
  theme: {
    extend: {
      fontFamily: {
        "rubik" : ['Rubik', 'sans-serif']
      },
      colors:{
        "light-black": "#45474B"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

