/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
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
        brightBlue: '#4369b2',
        brightBlueLight: '#3c62a3',
        brightBlueSupLight: '#446ab1',
        darkGray: '#1d1d1d',
      },
    },
  },
  plugins: [
    daisyui,
  ],
};
