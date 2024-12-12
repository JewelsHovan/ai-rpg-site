/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          800: '#1F2937',
          900: '#111827',
        },
        purple: {
          600: '#9333EA',
          700: '#7E22CE',
        }
      },
    },
  },
  plugins: [],
}

