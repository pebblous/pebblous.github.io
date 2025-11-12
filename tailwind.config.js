/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./scripts/**/*.js",
    "!./node_modules/**",
    "!./.git/**"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'pebblous-orange': '#F86825',
        'pebblous-teal': '#14b8a6',
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
