/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      primary: "#468EF9",
      secondary: "#0C66EE",
      blue: "#2F7CF0",
      black: "#222222",
      white: "#ffff",
      gray: "#666666",
      lightgray: "#DDDDDD",
      green: "#28C165",
      red: "#F4574D",
    },
  },
  plugins: [],
};
