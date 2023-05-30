// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#14532D',
      secondary: '#FFFFFF',
      accent: '#343741',
      tertiary: '#71717A',
      fourtiary: '#F5F5F5',
      reverse: '#18181B',

      blue: colors.blue,
      gray: colors.trueGray,
      grey: colors.gray,
      red: colors.rose,
      green: colors.green,
      yellow: colors.yellow,

      // Zart's
      white: '#fff',
      black: '#000',
      transparent: 'transparent'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
  ]
}
