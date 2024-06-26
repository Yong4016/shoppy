/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#ffa31a',
      },
      backgroundImage: {
        banner: "url('../public/images/banner.jpg')",
      },
    },
  },
  plugins: [],
};
