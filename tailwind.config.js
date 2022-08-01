/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {screens: {
      "xs": "375px",
      "sm": "640px",
      // => @media (min-width: 640px) { ... }

      "md": "768px",
      // => @media (min-width: 768px) { ... }

      "lg": "1024px",
      // => @media (min-width: 1024px) { ... }

      "xl": "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1536px",
      "containerWidth": "1300px",
      "fullHd": "1920px",
    },
    colors: {
      "green-g": "#87AF4A",
      "black-g": "#3D3D3D",
    },},
  },
  plugins: [],
}
