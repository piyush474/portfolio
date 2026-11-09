/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Instrument Serif", "Georgia", "ui-serif", "serif"],
        sans: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      colors: {
        ink: { DEFAULT: "rgb(var(--ink) / <alpha-value>)" },
        page: { DEFAULT: "rgb(var(--page) / <alpha-value>)" },
        copper: { DEFAULT: "rgb(var(--copper) / <alpha-value>)" },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out both",
        "fade-in": "fadeIn 1s ease-out both",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
