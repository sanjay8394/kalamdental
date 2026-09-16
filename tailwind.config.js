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
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(18, 60, 74, 0.08)',
        'card': '0 10px 30px -5px rgba(18, 60, 74, 0.06)',
        'elevated': '0 20px 40px -15px rgba(18, 60, 74, 0.12)',
        'glow': '0 0 25px rgba(229, 139, 115, 0.4)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 15px rgba(229, 139, 115, 0.4)' },
          '50%': { opacity: '0.85', boxShadow: '0 0 25px rgba(229, 139, 115, 0.7)' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
