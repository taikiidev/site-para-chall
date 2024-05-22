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
        "white-100": "#f0f0f0" ,
        "dark-green": "#008f21",
      },
      backgroundImage: {
        'home-bg': "url('/src/assets/design.png')",
        'hospital-bg': "url('/src/assets/hospital.avif')",
        'hospital2-bg': "url('/src/assets/hospital2.png')",
        'equipe-bg': "url('/src/assets/designequipe.png')",
        'fundo-bg': "url('/src/assets/foto.png')",
      },
      
      fontFamily: {
        'modak': ['Modak', 'system-ui'],
        'abezee': ['ABeeZee', 'sans-serif'], 
        'Orbitron' :['Orbitron', 'sans-serif'],
        'Anta' :['Anta', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}