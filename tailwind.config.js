/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#ccff00",
        surface: "#161616",
        surface2: "#1e1e1e",
        base: "#0a0a0a"
      },
      fontFamily: {
        display: ["var(--font-oswald)"],
        body: ["var(--font-inter)"]
      }
    }
  },
  plugins: []
};
