/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,css}", "./src/*.css"],
  theme: {
    extend: {
      fontFamily: {
        'libre': ["Libre Franklin", "sans-serif"]
      },
      colors: {
        "Blue": "hsl(223, 87%, 63%)",
        "PaleBlue": "hsl(223, 100%, 88%)",
        "LightRed": "hsl(354, 100%, 66%)",
        "Gray": "hsl(0, 0%, 59%)",
        "VeryDarkBlue": "hsl(209, 33%, 12%)"
      }
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}
