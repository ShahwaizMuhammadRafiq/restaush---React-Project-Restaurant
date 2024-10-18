/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#000000",  // Fixed the color if you intended black
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
          "2xl" : "6rem",  // Fixed typo (extra space) for 2xl
        }
      },
      animation:{
        "spin-slow" : "custom-spin 20s linear infinite",  // Updated to use custom keyframe
      },
      keyframes:{
        "custom-spin":{
          from:{
            transform : "rotate(0deg)",
          },
          to:{
            transform : "rotate(360deg)",
          },
        },
      }
    },
  },
  plugins: [],
}
