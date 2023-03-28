/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        modern: {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490'
        },
        bourbon: {
          grey: '#333',
          blueDark: '#46646E',
          blueMid: '#5B7D96',
          blueLight: '#8FA9C2',
          accent: '#ECB469',
          ivory: '#FFFDF4',
          orange: '#E34234',
          paleyellow: '#FFFFBF99',
          accentRed: '#C02C19'
        },
        groovy: {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490'
        },
        techy: {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490'
        },
        corp: {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490'
        },
        punk: {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490'
        }
      }
    }
  },
  plugins: []
}
