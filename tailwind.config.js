/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-white": "#f3f3ff",
        "purple-3": "#6797F8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        walsheim: ["GT Walsheim", "sans-serif"],
      },
    },
  },
  plugins: [],
};
