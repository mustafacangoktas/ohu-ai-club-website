/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      '2xl': { 'max': '1536px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1280px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1024px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '768px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '640px' },
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}

