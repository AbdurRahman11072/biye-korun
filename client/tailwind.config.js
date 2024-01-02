/** @type {import('tailwindcss').Config} */
export default {
  
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      bannertext:["Philosopher","sans-serif"],
      inter:["Inter","sans-serif"]
    }
  },
  plugins: [
function({addUtilities}) {
  const newUtilities = {
    ".no-scrollbar::-webkit-scrollbar":{
      display:"none",
    },
    ".no-scrollbar":{
      "-ms-overflow-style":"none",
      "scrollbar-widht":"none",
    }
  };
},
require("daisyui"),
],
}

