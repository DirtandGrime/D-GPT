/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/layouts/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`
  ],
  theme: {
    fontFamily: {
      greycliff: ['greycliff-cf','sans-serif'],
      neato: ['neato-serif-rough','sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        darkest: '#050708',
        dark: '#05070890',
        DEFAULT: '#050708',
        light: '#05070870',
        lightest: '#05070860',
      },
      clean: '#E3E3E3',
      cement: {
        DEFAULT: '#DBD9D5',
        lightest: '#DBD9D560',
      },
      sky: '#8B9C9E',
      storm: '#374D53',
      dirt: '#9A6B4B',
      mud: '#563B3F',
    },
    extend: {
      // boxShadow: {
      //   'lg': '2px 4px 6px 0 rgb(5 7 8 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.1);',
      //   'md': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);',
      //   'DEFAULT': '3px 4px 6px 0 rgb(5 7 8 / 0.4), 2px 2px 4px -2px rgb(0 0 0 / 0.1);',
      //   'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);',
      //   'xs': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);',
      // },
    }
  }
}
