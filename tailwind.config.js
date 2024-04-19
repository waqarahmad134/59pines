/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themePurpleLight: "#9C76F4",
        themePurpleDark: "#6941C6",
        themeGray: "#212936",
        themeGraySuit: "#8E8E93",
        themeYellow: "#FFE819",
        themeBlueLight : "#DDCAFB"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        shadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      },
      backgroundImage: {
        bodyRight: "url('/images/body-right.png')",
        bodyLeft: "url('/images/body-left.png')",
        videoBanner: "url('/images/banner.png')",
      },
    },
  },
  plugins: [],
}