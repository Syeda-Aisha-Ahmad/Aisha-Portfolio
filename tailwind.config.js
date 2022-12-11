/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#262bb2",

          "secondary": "#f2529f",

          "accent": "#662191",

          "neutral": "#282934",

          "base-100": "#FFF",

          "info": "#3A8FD4",

          "success": "#17976C",

          "warning": "#F08C28",

          "error": "#F46783",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
