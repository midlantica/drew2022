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
        base: {
          grey: '#333',
          white: 'white',
          black: 'black',
          ivory: '#fffdf4'
        },
        modern: {
          ruby: '#D71D5B',
          accent: '#FFC05C',
          accentRed: '#FFC05C',
          grey: '#352E38',
          backer: '#352E38'
        },
        bourbon: {
          bourbon: '#52090a',
          blueDark: '#46646E',
          blueMid: '#5B7D96',
          blueLight: '#8FA9C2',
          accent: '#ECB469',
          orange: '#e34234',
          paleyellow: '#ffffbf99',
          accentRed: '#c02c19',
          ivory: '#fffdf4'
        },
        groovy: {
          aqua: '#99f1ec',
          yellow: '#ffdd4b',
          orange: '#ff9f00',
          red: '#ff1a22',
          yellowPale: '#ffe985',
          aquaDk: '#80cbc7',
          yellowDk: '#d3b83e',
          orangeDk: '#e78e00',
          redDk: '#d5161d',
          yellowPaleDk: '#ffdd4b'
        },
        techy: {
          mango: '#ffc600',
          blueTech: '#423ba0'
        },
        corp: {
          grey: '#333',
          blueDark: '#01487F',
          black: '#012946',
          blueMid: '#5b7d96',
          blueLight: '#8fa9c2',
          accent: '#ecb469',
          ivory: '#fffdf4',
          orange: '#e34234',
          paleyellow: '#ffffbf99',
          accentRed: '#C02C19',
          white: '#fffdf4'
        },
        punk: {
          //
        }
      }
    }
  },
  plugins: []
}
