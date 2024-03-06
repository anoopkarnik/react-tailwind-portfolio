/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#F7F8FC',
        'secondary-light': '#FFFFFF',
        'ternary-light': '#f6f7f8',

        'primary-dark': '#0D2438',
        'secondary-dark': '#102D44',
        'ternary-dark': '#1E3851',
      },
    },
  },
  variants: {
    extend: { opacity: ['disabled'] },
  },
  plugins: ['@tailwindcss/forms'],
}