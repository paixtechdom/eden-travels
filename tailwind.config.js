/** @type {import('tailwindcss').Config} */
// linear-gradient(to right, rgb(0,0,0,0.9), rgb(0,0,0,0.7)), 

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/src/assets/images/hero.jpg')",  
      },
      colors:{
        "primary" : "rgb(150,100,15)",
        "secondary": "rgb(17,18,22)",
        "tertiary" : "rgb(150,100,0)"
      }
    },
  },
  plugins: [],
}

