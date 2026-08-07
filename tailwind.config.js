/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          light: "#E8F0FF",
        },
        bg: {
          DEFAULT: "#F6F7FB",
          dark: "#05070D",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#0B101B",
        },
        line: {
          DEFAULT: "#E4E9F2",
          dark: "#1C2434",
        },
        accent: {
          DEFAULT: "#0891B2",
          dark: "#22D3EE",
        },
        accent2: {
          DEFAULT: "#7C3AED",
          dark: "#A78BFA",
        },
        magenta: {
          DEFAULT: "#DB2777",
          dark: "#F472B6",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "Space Grotesk",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.06) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgba(11,18,32,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,18,32,0.06) 1px, transparent 1px)",
        "radial-accent":
          "radial-gradient(ellipse at top, rgba(34,211,238,0.12), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 24px rgba(34,211,238,0.35)",
        "glow-violet": "0 0 24px rgba(167,139,250,0.35)",
        "glow-lg": "0 0 60px rgba(34,211,238,0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin 20s linear infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
