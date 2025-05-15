/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
  animation: {
        float: "float 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(5px)" }
        }
      },
      colors: {
        primary: "#033D54",  
        primaryHover: "#022838", 

        secondary: '#FFD700',
      
      }



    },
  },
  plugins: [],
}

