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
        'pebblous-orange-text': '#FF9900',
        'pebblous-teal': '#14b8a6',
        'navy-900': '#0a1628',
        'navy-800': '#1e3a5f',
        'navy-700': '#1e4d8b',
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
