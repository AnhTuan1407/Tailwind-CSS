/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
    './**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: ['./index.html'],
  theme: {
    extend: {
      spacing: {
        35: '35px',
      }
    },
  },
  plugins: [],
}

