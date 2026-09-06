import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2E6B4D", // Primary — Olive Green
          dark: "#23523A", // Primary hover/darker
          light: "#CDE2D8", // Light green accent
        },
        accent: "#C96F4A", // Terracotta
        ink: "#1F2937", // Neutral dark (headings)
        muted: "#6B7280", // Neutral mid (body)
        mist: "#F8FAF9", // Light background
        sand: "#E1DDD4", // Warm neutral surface
        success: "#16A34A",
        error: "#DC2626",
      },
    },
  },
  plugins: [],
} satisfies Config;
