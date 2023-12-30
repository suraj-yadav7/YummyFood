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
      "black":'#1c1c1c',
      "green":"#03C03C",
      "greenlight":"#32de84",
      "gray":"#808080"
    },
    fontFamily:{
      "roboto":[ 'Roboto Slab', 'serif'],
      "raleway":['Raleway', 'sans-serif'],
      "lora":['Lora', 'serif'],
      "carrois":['Carrois Gothic', 'sans-serif']
    },
    borderWidth:{
      DEFAULT:'1px',
      '2':"2px",
      "3":"3px",
      "5":"5px"
    }
  },
  plugins: [],
}

