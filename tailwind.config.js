/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/*.html",
    "./build/pages/*.html"
  ],
  theme: {
    extend: {
      colors:{
        "custom-purple": "#493995",
      },
    },
    fontFamily: {
      DMSans: ["DM Sans, sans-serif"],
    },
  },
  plugins: [],
}

