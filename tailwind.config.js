// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
  theme: {
    extend: {
      screens: {
        'sm': '360px',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mont: ['Montserrat'],
        montBold: ['Montserrat-Bold'],
      },
      fontSize:{
        '10':'10px',
      },
      colors: {
        primary: '#0E0606',
        secondary: '#319D8F',
        grey: '#F3F4F8',
        'input-border': '#DADBDB',
        authBg: '#F9F7FE',
        tableHeadBg: '#EEEEEE',
        tableHeadText: '#0E0606',
        tableBorder: '#C9CDD1',
        iconBtn: 'rgba(49, 157, 143, 0.1)',
        'root-background': '#fcf6fc',
      },
      spacing: {
        'neg-1/2': '-50%',
        'neg-10px': '-10px',
      },
      backgroundImage: {
        'hero-background': 'url(\'./src/assets/hero.png\')',
      },
      maxWidth: {
        xs: '210px',
      },
      borderRadius:{
        'large':'3.5rem',
      },
      boxShadow: {
        card: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        table: '0px 5px 25px -4px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
