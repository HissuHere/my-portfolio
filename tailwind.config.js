/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14151A",
          light: "#E8E6E1",
        },
        bg: {
          DEFAULT: "#FAFAF7",
          dark: "#0F1117",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#171A23",
        },
        accent: {
          DEFAULT: "#C97A2B", // amber, darkened for AA contrast on light bg
          dark: "#E8A33D",    // brighter amber for dark bg
        },
        slateAccent: "#3D5A80",
        line: {
          DEFAULT: "#E4E1D9",
          dark: "#262932",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
