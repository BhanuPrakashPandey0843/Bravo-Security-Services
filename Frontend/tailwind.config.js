
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
   
  ],
  theme: {
    extend: {
      colors:{
      primary:'#5C6AC4',
      secondary:'#F0F2FF',
      tertiary:'#1CB87F'
      },
      fontFamily: {
        customFont: ['"Custom Font"', "poppins"],
        
      },
      
  },
  plugins: [
    
  ],
}
}
