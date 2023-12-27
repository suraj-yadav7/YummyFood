/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'redlava':'#D2122E',
      "redlight":"#F75D59",
      'white':"#ffff",
      "black":'#00000'
    }
  },
  plugins: [],
}

