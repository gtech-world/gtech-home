/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: 'var(--open-sans)',
      },
      fontSize: {
        '1.5xl': '1.375rem',
        '3.5xl': '2rem',
      },
      screens: {
        'md': [
          {'min': '0', 'max': '900px'},
        ]
      },
      width:{
        container: '75rem'
      },
      colors:{
        bgc:{
          DEFAULT: '#f1f1f1',
          1: "#f8f8f8"
        },
        green:{
          DEFAULT: '#29953A',
          1: "#349644",
          2: "#CBDED0",
          3: "#00BF1F",
          4: "#77FF61",
          hover: "#2E8C3D",
        },
        gray:{
          1: "#999999",
          2: "#666",
          10: "#CCCCCC",
        },
        yellow:{
          DEFAULT: '#FFF846'
        },
        blue:{
          1: '#618DA8'
        }
      }
    }
  },
  plugins: [],
}
