 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('/src/assets/images/Imagebackground.png')",
        'cover-background': "url('/src/assets/images/bg-5.png')",
      },
    },
  },
  plugins: [],
}
// colors:{'color1':'#090E23'}