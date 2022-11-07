/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    { pattern: /bg-(Blue|Work|Play|Study|Exercise|Social|Self)/ }

  ],
  theme: {
    screens: {
      "Mobile": { "min": "320px", "max": "700px" },
      // "Tablet": { "min": "480px", "max": "768px" },
      // "default": { "min": "768px", "max": "1024px" },
      // "Desktop": { "min": "1024px", "max": "1200px" },
      "large": "1440px",
    },
    colors: {
      "Blue": " hsl(246, 80%, 60%)",
      "Work": " hsl(15, 100%, 70%)",
      "Play": " hsl(195, 74%, 62%)",
      "Study": " hsl(348, 100%, 68%)",
      "Exercise": " hsl(145, 58%, 55%)",
      "Social": " hsl(264, 64%, 52%)",
      "Self": " hsl(43, 84%, 65%)",

      // ### Neutral

      "Very-dark-blue": " hsl(226, 43%, 10%)",
      "Dark-blue": " hsl(235, 46%, 20%)",
      "Desaturated-blue": " hsl(235, 45%, 61%)",
      "Pale-Blue": " hsl(236, 100%, 87%)",
    },
    fontFamily: {
      Robik: ["Rubik", "sans-serif"]
    },
    fontWeight: {
      "ms": 300,
      "lg": 400,
      "xl": 500,
    },
    extend: {},
  },
  plugins: [],
}
