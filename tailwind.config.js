// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 6s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "pulse-slow": "pulse 8s ease-in-out infinite",
        "pulse-medium": "pulse 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#4f46e5", // indigo-600
          secondary: "#3b82f6", // blue-500
          accent: "#a855f7", // purple-500
          neutral: "#1e293b", // slate-800
          "base-100": "#ffffff", // white
          "base-content": "#0f172a", // slate-900
        },
        dark: {
          primary: "#6366f1", // indigo-500
          secondary: "#60a5fa", // blue-400
          accent: "#c084fc", // purple-400
          neutral: "#020617", // slate-950
          "base-100": "#0f172a", // slate-900
          "base-content": "#f8fafc", // slate-50
        },
      },
    ],
  },
};
