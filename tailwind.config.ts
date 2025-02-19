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
        background: "var(--background)",
        foreground: "var(--foreground)",
        divColour: "#181818",
        borderColour: "#555555",
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        'base-jakarta': ['14px', {
          lineHeight: '30px',
          letterSpacing: '0%',
          fontWeight: '100',
        }],
      },
    },
  },
  plugins: [],
} satisfies Config;
