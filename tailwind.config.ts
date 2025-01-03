import type { Config } from "tailwindcss";

const beforePropertiesPlugin = require('tailwindcss-pseudo-elements');
const textShadowPlugin = require("tailwindcss-textshadow");
const scrollbarHidePlugin = require('tailwind-scrollbar-hide');
const scrollbarPlugin = require('tailwind-scrollbar');

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        light: "1px 1px 2px rgba(0, 0, 0, 0.25)", // Легкая черная тень
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.25)", // Стандартная
      },
      fontFamily: {
        interTight: ['"Inter Tight"', 'sans-serif'],
      },
      fontSize: {
        'sm-base': ['0.9375rem', '1.5rem'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800'
      },
      colors: {
        // backgroundColor: "#080808",
        // primaryColor: "#FFFFFF",
        // emphasizingColor: "#0F0F10",
        // emphasizingColor2: "#17171A",

        // borderColor: "#181818",
        
        // primaryText: "#FFFFFF",
        // blueText: "#3A89FF",
        // secondaryText: "#606060",

        // darkText: "#151516",

        // backgroundColor: "#000000",
        // primaryColor: "#FFFFFF",
        // emphasizingColor: "#1F1F21",
        // emphasizingColor2: "#1F1F21",

        // borderColor: "#202021",
        
        // primaryText: "#FFFFFF",
        // blueText: "#3A89FF",
        // secondaryText: "#6F6F6F",

        // darkText: "#151516",

        backgroundColor: "#090909",
        primaryColor: "#FFFFFF",
        emphasizingColor: "#111010",
        emphasizingColor2: "#202020",
        blueColor: "#0769FF",

        borderColor: "#292929",
        
        primaryText: "#FFFFFF",
        blueText: "#2E81FF",
        secondaryText: "#8B8B8B",

        darkText: "#151516",
      },
    },
    variants: {
      extend: {
        before: ['responsive'],
        after: ['responsive'],
      },
    },
  },
  plugins: [beforePropertiesPlugin, textShadowPlugin, scrollbarHidePlugin, scrollbarPlugin],
} satisfies Config;