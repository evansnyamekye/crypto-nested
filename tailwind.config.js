/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies
const daisyui = require('daisyui');

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  daisyui: {
    themes: false,
    darkTheme: 'light',
  },
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightBlue: '#5283e0',
        brightBluedDark: '#4063a5',
        brightBlueLight: '#3c62a3',
        brightBlueSupLight: '#4369b2',
        brightBlueSupDark: '#35548b',
        darkGray: '#1d1d1d',
        newRed: '#ec4c8a',
        newLightRed: '#ff5294',
        newDarkRed: '#df4782',
      },
      backgroundColor: {
        'coin-even': '#3c62a3',
      },
      fontFamily: {
        robotoSlab: ['Roboto Slab', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    daisyui,
  ],
};
