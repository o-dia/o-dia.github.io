import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#f3eee7",
        "ink-muted": "#b9aca0",
        "ink-soft": "#8f8278",
        ember: "#e5a15f",
        moss: "#9fae8a",
        copper: "#b96f4c",
        graphite: "#15110f",
        "graphite-soft": "#211b18",
        "graphite-line": "rgba(243, 238, 231, 0.13)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(229, 161, 95, 0.14)",
        surface: "0 24px 80px rgba(0, 0, 0, 0.24)",
      },
    },
  },
  plugins: [],
};

export default config;
