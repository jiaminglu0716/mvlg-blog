/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./web/components/**/*.{js,ts,jsx,tsx}",
    "./web/containers/**/*.{js,ts,jsx,tsx}",
    "./web/views/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
  theme: {
    fontFamily: {
      sans: ["Comic Sans", "sans-serif"],
      serif: ["Comic Sans MS", "ui-sans-serif"],
    },
  },
};
