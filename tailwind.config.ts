import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4B0082",
        "content-primary-inverse": "#FFF",
        "overlay-white-50": "rgba(255, 255, 255, 0.50)",
        "background-light": "#FAF7FB",
        "content-primary-black": "#131211",
        "content-secondary": "#3D3C39",
        "content-tertiary": "#716F6A",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
        geist: ["var(--font-geist)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
