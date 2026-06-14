import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17211d",
        leaf: "#1f7a5a",
        oxygen: "#2878b8",
        glucose: "#d89216",
        membrane: "#8b5f3c"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 33, 29, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
