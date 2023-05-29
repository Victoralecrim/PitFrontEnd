/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage:{
        'food' : 'url("https://hosting.renderforestsites.com/images/5699226/165066/e33418a5824d5f1a3d76b1ae4faf11f6.jpg")'
      }
    }
  },
  plugins: []
}
