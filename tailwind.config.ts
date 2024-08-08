import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",      
      "lg": "1025px",
    },
    extend: {
      boxShadow: {
        'balance-yellow-primary': '0px 0px 8px 1px rgba(253, 208, 38, 0.4)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "cattedrale": ["Cattedrale", "sans-serif"],
        "cattedrale-outline": ["Cattedrale-Outline", "sans-serif"],
        "imbue": ["Imbue", "serif"]
      },
      colors: {
        "primary": "#0A1214",      
        "secondary": "#070D0F",      
        "primary-yellow": "#FDD026",
        "secondary-yellow": "#B89926",      
      },
    },
  },
  plugins: [],
};
export default config;
