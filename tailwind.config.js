/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-teal': '#123C4A',
        'medical-teal': '#168C8C',
        'soft-coral': '#E58B73',
        'warm-ivory': '#F7F4EE',
        'mint-mist': '#E7F3F0',
        'charcoal': '#26383D',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(18, 60, 74, 0.08)',
        'card': '0 10px 30px -5px rgba(18, 60, 74, 0.06)',
        'elevated': '0 20px 40px -15px rgba(18, 60, 74, 0.12)',
      }
    },
  },
  plugins: [],
}
