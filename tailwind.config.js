/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Vite uses /src
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#111111",
        primary: "#f5f5f5",
        secondary: "#a1a1aa",
        accent: "#06b6d4",
        border: "#1f2937",
      },
    },
  },

  plugins: [],
};
