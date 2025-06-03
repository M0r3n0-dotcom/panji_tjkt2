/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container :{
      center : true,
      padding : '16px',
    },
    extend: {
      screens : {
        '2xl' : '1320px',
      },
      colors : {
        primary : "#60a5fa", // Primary Color
        secondary : "#6b7280", // Gray Color
        dark : "#000000", // Black Color
      }
    },
  },
  plugins: [],
}

