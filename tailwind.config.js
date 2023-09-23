/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Rosa Sans', ...defaultTheme.fontFamily.sans], 
    },
    extend: {
    },
  },
  darkMode: "class",
  plugins: [
    nextui(
      {
        themes: {
          light: {
            layout: {},
            colors: {
              background: "#fff",
              foreground: "#000",
              divider: "#000",
              overlay: "#000",
              focus: "#000",
              content1: "#000",
              content2: "#000",
              content3: "#000",
              content4: "#000",
              default: "#000",
              primary: "#092C3F",
              secondary: "#FE5C40",
              success: "#4caf50",
              warning: "#ff9800",
              danger: "#f44336",
            },
          },
        },
      }
    )
  ],
};

