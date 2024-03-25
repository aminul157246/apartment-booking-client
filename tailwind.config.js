/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],

  theme: {
   
    extend: {
      fontFamily : {
       textStyle :  "'Anta', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],

}
