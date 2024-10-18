/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#0000"
      },
      fontFamily:{
        sans : ["Poppins","sans-serif"],
      },
      container:{
        center : true,
        padding :{
          DEFAULT : "1rem",
          sm : "2rem",
          lg : "8rem",
          xl : "5rem",
          "2xl " : "6rem"
        }
      }
    },
  },
  plugins: [],
}

