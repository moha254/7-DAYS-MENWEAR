/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'red-500': '#FF0000',
        'light-yellow': '#FFFACD',
      },
    },
  },
  plugins: [],
};
