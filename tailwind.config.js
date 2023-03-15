/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontSize: {
        xss: "0.55rem",
      },
      colors: {
        primary: "#BEE1FE",
        secondary: "#0D2A52",
        flow: {
          50: "#f5b498",
          100: "#f3a483",
          200: "#f1956e",
          300: "#ef8659",
          400: "#ed7745",
          500: "#eb6830",
          600: "#d45e2b",
          700: "#bc5326",
          800: "#a54922",
          900: "#8d3e1d",
        },
      },
    },
  },
  plugins: [],
};
