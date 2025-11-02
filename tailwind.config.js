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
        "primary-foreground": "#000000",
        secondary: "#a1a1aa",
        "secondary-foreground": "#000000",
        accent: "#06b6d4",
        "accent-foreground": "#ffffff",
        border: "#1f2937",
        foreground: "#1a1a1a",
        destructive: "#ef4444",
        ring: "#a8a8a8",
      },
    },
  },

  plugins: [],
};
