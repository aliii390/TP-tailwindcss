/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          orange: 'hsl(35, 77%, 62%)' ,
          red: 'hsl(5, 85%, 63%) ,'
        },
        neutral: {
          'off-white' : 'hsl(36, 100%, 99%)',
          'dark-grayish-blue': 'hsl(236, 13%, 42%)'
        }
      }
    },
  },
  plugins: [],
}

