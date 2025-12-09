/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        probability: {
          DEFAULT: '#9333EA',
          light: '#C084FC',
        },
        statistics: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
        },
        ml: {
          DEFAULT: '#10B981',
          light: '#34D399',
        },
        ai: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
        },
      },
    },
  },
  plugins: [],
}
