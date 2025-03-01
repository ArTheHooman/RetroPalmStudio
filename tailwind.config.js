/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./extras.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        text_d: '#e5e7eb',
        background_d: '#05070a',
        primary_d: '#006aff',
        secondary_d: '#02ac5c',
        accent_d: '#1ff4f4',
        text_l: '#14161a',
        background_l: '#f5f7fa',
        primary_l: '#006aff',
        secondary_l: '#53fdae',
        accent_l: '#0be0e0',
      },
    },
  },
  plugins: [],
  darkMode: 'media',
};