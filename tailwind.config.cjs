/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    screens: {
      'tablet': '1024px',
      // => @media (min-width: 640px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
