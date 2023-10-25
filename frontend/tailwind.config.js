/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBeige: "#e2cbb0",
        lightGreen: "d9c2ba",
        teal: "98aeb6",
        pink: "9c8481",
        brown: "#4b3b42",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
