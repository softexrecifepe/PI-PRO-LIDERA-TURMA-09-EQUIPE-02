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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'box': '#FBF9FF',
        'question': '#edebf2',
        'button-green': '#33F54A',
        'button-orange': '#ED7447'
      },
    },
  },
  plugins: [],
};
export default config;
