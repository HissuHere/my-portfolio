/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          light: "#EDEDEF",
        },
        bg: {
          DEFAULT: "#FAFAFB",
          dark: "#09090B",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#111113",
        },
        line: {
          DEFAULT: "#E7E7E9",
          dark: "#26262A",
        },
        accent: {
          DEFAULT: "#4F46E5",
          dark: "#818CF8",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        light: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.04)",
        cardHover: "0 4px 16px rgba(0,0,0,0.07)",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
