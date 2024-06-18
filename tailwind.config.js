/** @type {import('tailwindcss').Config} */
// linear-gradient(to right, rgb(0,0,0,0.9), rgb(0,0,0,0.7)), 

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/src/assets/images/hero.jpg')",  
        // "heroGradient": "linear-gradient(to top right, #000, #0a131b, #264d73)"
        // "heroGradient": "linear-gradient(to bottom right, #000, #0a131b, #264d73)"
        "heroGradient": "linear-gradient(to bottom right, rgba(0,0,0, 0.9), rgba(0,0,0, 0.9)), url(/src/assets/images/travelArrangements1.jpg)",
        "heroGradient2": "linear-gradient(to bottom right, rgba(0,0,0, 0.8), rgba(0,0,0, 0.8)), url(/src/assets/images/travelArrangements2.jpg)"

      },
      colors:{
        "primary": "#66CCFF",
        "secondary" : "#0e1925",
        "tertiary" : "rgb(150,100,0)"
      }
    },
  },
  plugins: [],
}

