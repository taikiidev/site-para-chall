/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'home-bg': "url(https://static.vecteezy.com/system/resources/previews/025/373/607/original/fun-colorful-abstract-background-in-doodle-style-simple-childish-scribble-backdrop-creative-minimalist-hand-drawn-pattern-with-bright-cute-elements-random-colorful-swirls-bundles-and-dots-vector.jpg)"
      },
      
      fontFamily: {
        'modak': ['Modak', 'system-ui'],
        'abezee': ['ABeeZee', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}