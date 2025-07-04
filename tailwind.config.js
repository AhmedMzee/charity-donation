/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.5rem',
      },
      colors: {
        primary: '#4f46e5', 
      },
    },
  },
}