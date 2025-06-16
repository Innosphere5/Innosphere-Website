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
        "aurora-shift": {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "aurora-shift-reverse": {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(-30px, -30px) scale(1.1)" },
          "66%": { transform: "translate(20px, 40px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "aurora-float": {
          "0%": { transform: "translate(0px, 0px) rotate(0deg) scale(1)" },
          "50%": { transform: "translate(-20px, -30px) rotate(180deg) scale(1.1)" },
          "100%": { transform: "translate(0px, 0px) rotate(360deg) scale(1)" },
        },
        "particle-1": {
          "0%": { transform: "translate(0px, 0px) scale(1)", opacity: "0.8" },
          "100%": { transform: "translate(100vw, -100vh) scale(0)", opacity: "0" },
        },
        "particle-2": {
          "0%": { transform: "translate(100vw, 0px) scale(1)", opacity: "0.8" },
          "100%": { transform: "translate(0px, -100vh) scale(0)", opacity: "0" },
        },
        "particle-3": {
          "0%": { transform: "translate(50vw, 100vh) scale(1)", opacity: "0.8" },
          "100%": { transform: "translate(-50vw, 0px) scale(0)", opacity: "0" },
        },
      },
      animation: {
        "aurora-shift": "aurora-shift 15s ease-in-out infinite",
        "aurora-shift-reverse": "aurora-shift-reverse 18s ease-in-out infinite",
        "aurora-float": "aurora-float 20s ease-in-out infinite",
        "particle-1": "particle-1 10s linear infinite",
        "particle-2": "particle-2 14s linear infinite",
        "particle-3": "particle-3 12s linear infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 6s ease-in-out infinite",
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
          accent: "#2563eb", // blue-600
          neutral: "#1e293b", // slate-800
          "base-100": "#ffffff", // white
          "base-content": "#0f172a", // slate-900
        },
        dark: {
          primary: "#6366f1", // indigo-500
          secondary: "#60a5fa", // blue-400
          accent: "#3b82f6", // blue-500
          neutral: "#020617", // slate-950
          "base-100": "#0f172a", // slate-900
          "base-content": "#f8fafc", // slate-50
        },
      },
    ],
  },
};
