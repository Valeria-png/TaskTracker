/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      mytheme: {
        'accent' : '#A8DADC'
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#457B9D",
          
"secondary": "#ff00ff",
          
"accent": "#a8dadc",

          
"error": "#E63946",
          },
        },
      ],
    },
  plugins: [
    require('daisyui'),
  ],
}

