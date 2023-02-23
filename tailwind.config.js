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
          DEFAULT: '#EFEFEF',
        },
        green:{
          DEFAULT: '#227A30',
          1: "#349644",
          2: "#CBDED0",
          hover: "#2E8C3D",
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
