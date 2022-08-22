/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bubbles-texture': "url('./img/bubbles.jpeg')",
      },
    },
  },
  plugins: [],
};
