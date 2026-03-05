/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        cream: "#FCFAF6",
        charcoal: "#3B3B3B",
        copper: "#D47B32",
      },
    },
  },
  plugins: [],
};

