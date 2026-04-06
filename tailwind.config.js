/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        navy: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          mid: '#0D1F3C',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E5C76B',
          pale: '#F5E6C0',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'fade-down': 'fadeDown 1s ease-out forwards',
        'slide-left': 'slideLeft 1s ease-out forwards',
        'slide-right': 'slideRight 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.7), 0 0 80px rgba(59, 130, 246, 0.3)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #0F172A 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(30, 58, 138, 0.3) 0%, rgba(59, 130, 246, 0.1) 100%)',
        'shine': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      },
    },
  },
  plugins: [],
}
