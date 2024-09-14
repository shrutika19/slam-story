/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#fff0f3',
        'custom-heading': '#0c0c0c'
      },
    },
  },
  plugins: [],
}
