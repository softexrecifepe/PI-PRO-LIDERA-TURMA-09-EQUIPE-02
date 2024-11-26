import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
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
        'boxd': '#282828',
        'question': '#edebf2',
        'questiond': '#242323',
        'button-green': '#33F54A',
        'button-orange': '#ED7447'
      },
    },
  },
  plugins: [],
};
export default config;
