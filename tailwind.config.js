/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayishBlue: "hsl(217, 19%, 38%)",
        darkGrayishBlue: "hsl(217, 19%, 24%)",
        darkBlue: "hsl(218, 23%, 16%)",
        lightCyan: "hsl(193, 38%, 86%)",
        neonGreen: "hsl(150, 100%, 66%)",
      },
      boxShadow: {
        allSides: "0px 0px 20px hsl(150, 100%, 66%)",
      },
      fontFamily: {
        mainFont: `'Manrope', sans-serif`,
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
