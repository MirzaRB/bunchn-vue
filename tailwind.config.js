// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mont: ['Montserrat'],
      },
      colors: {
        primary: '#0E0606',
        secondary: '#319D8F',
        grey: '#F3F4F8',
        'input-border': '#DADBDB',
      },
      spacing: {
        'neg-1/2': '-50%',
        'neg-10px': '-10px',
      },
      backgroundImage: {
        'hero-background': 'url(\'./src/assets/hero.png\')',
      },
      maxWidth: {
        'xs': '210px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
