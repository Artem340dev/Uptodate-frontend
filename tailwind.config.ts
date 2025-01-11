import type { Config } from "tailwindcss";

const beforePropertiesPlugin = require('tailwindcss-pseudo-elements');
const textShadowPlugin = require("tailwindcss-textshadow");
const animatePlugin = require('tailwindcss-animate');
const lineClampPlugin = require('@tailwindcss/line-clamp');

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
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
        merri: ['"Merriweather"', 'serif'],
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

        // backgroundColor: "white",
        // primaryColor: "black",
        // emphasizingColor: "#1F1F21",
        // emphasizingColor2: "#1F1F21",

        // borderColor: "#202021",
        
        // primaryText: "#FFFFFF",
        // blueText: "#3A89FF",
        // secondaryText: "#6F6F6F",

        // darkText: "#151516",

        backgroundColor: "#EFEEEC",
        primaryColor: "#232323",
        emphasizingColor: "#E2E2E2",
        emphasizingColor2: "#F4F4F4",
        emphasizingColor3: "#202020",
        redColor: "#FF78B7",
        warnColor: "#FF4C4C",

        borderColor: "#CFCFCF",
        
        primaryText: "#232323",
        redText: "#FF78B7",
        secondaryText: "#A2A2A2",

        oppositeText: "#EFEEEC",

        // backgroundColor: "#090909",
        // primaryColor: "#FFFFFF",
        // emphasizingColor: "#111010",
        // emphasizingColor2: "#181818",
        // emphasizingColor3: "#202020",
        // blueColor: "#0769FF",
        // warnColor: "#FF4C4C",

        // borderColor: "#292929",
        
        // primaryText: "#FFFFFF",
        // blueText: "#2E81FF",
        // secondaryText: "#8B8B8B",

        // darkText: "#151516",
      },
    },
    variants: {
      extend: {
        before: ['responsive'],
        after: ['responsive'],
      },
    },
  },
  plugins: [beforePropertiesPlugin, textShadowPlugin, animatePlugin, lineClampPlugin],
} satisfies Config;