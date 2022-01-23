
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  content: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      red: colors.red,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      cyan: colors.cyan,
      teal: colors.teal,
      orange: colors.orange,

      primary: colors.indigo,     
      secondary: colors.stone,
    },
    extend: {},
  },
  plugins: [],
}
