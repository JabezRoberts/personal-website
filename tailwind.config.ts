/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /* Backgrounds */
        background: "#ffffff",
        "background-dark": "#0b0b14",

        /* Text */
        primary: "#0f172a",
        "primary-dark": "#e5e7eb",

        muted: "#64748b", 
        "muted-dark": "#9ca3af",  

        /* Brand */
        brand: "#10002b",
        "brand-light": "#dee2e6",

        accent: "#003566",
        "accent-light": "#4cc9f0",

        surface: "#f8f9fa",
        "surface-dark": "#111827",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["DM Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;