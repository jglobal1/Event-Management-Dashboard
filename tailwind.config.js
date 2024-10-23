/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FCF7FF', // Light primary
          DEFAULT: '#8576FF', // Primary color (normal)
          dark: '#484554', // Dark primary
          select: '#ADA9BB', // Primary select
        },
        secondary: '#6A6676', // Secondary color
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    colors: {
      'custom-yellow': '#ffb700',
    },
  },
  plugins: [],
}

}