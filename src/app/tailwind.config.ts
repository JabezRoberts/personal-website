// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#10002b",
          light: "#dee2e6", // used in dark mode for brand highlights
        },
        accent: {
          DEFAULT: "#003566",
          light: "#4cc9f0", // brighter in dark mode
        },
        surface: {
          DEFAULT: "#f8f9fa",
          dark: "#111827",
        },
        primary: {
          bg: "#ffffff",
          dark: "#0b0b14",
        },
        text: {
          primary: {
            light: "#0f172a",
            dark: "#e5e7eb",
          },
          muted: {
            light: "#475569",
            dark: "#9ca3af",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["DM Sans", "Inter", "system-ui", "sans-serif"], // optional for headings
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;