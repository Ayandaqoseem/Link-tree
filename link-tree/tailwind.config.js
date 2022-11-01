/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        Gray :{
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        }
      },
      height: { box: "76px", boxSm: "76px", img: "88px" },
      width: { box: "76px", boxSm: "76px", img: "88px", tip: "185px" },
      borderWidth: { 1: "1px" },
      maxWidth: { custom: "1216px" },
    },
  },
  plugins: [],
}
