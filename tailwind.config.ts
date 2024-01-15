import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#01CFC9",
          light: "#00e6de",
          dark: "#006663",
        },
        secondary: {
          DEFAULT: "#0F2650",
          light: "#1f3d99",
          dark: "#0a1433",
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
export default config;
