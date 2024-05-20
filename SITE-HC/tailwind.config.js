/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-500": "#5271ff",
        "white-100": "#f0f0f0" 
      },
      backgroundImage: {
        'home-bg': "url('/src/assets/design.png')",
      },
      
      fontFamily: {
        'modak': ['Modak', 'system-ui'],
        'abezee': ['ABeeZee', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}