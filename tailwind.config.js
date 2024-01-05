/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Outfit", "sans-serif"],
      },
      fontSize: {
        base: "0.9375rem",
        xl: "1.375rem",
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        "light-gray": "hsl(212, 45%, 89%)",
        "gray-blue": "hsl(220, 15%, 55%)",
        "dark-blue": "hsl(218, 44%, 22%)",
      },
    },
  },
  plugins: [],
};
