/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gold1: '#D4AF37',
        gold2: '#FFD27A',
        brandBlack: '#0a0a0a'
      },
      backgroundImage: {
        'banner-fade': 'linear-gradient(180deg, rgba(10,10,10,0.0) 0%, rgba(10,10,10,0.45) 80%)'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fadeUp 600ms ease forwards'
      }
    }
  },
  plugins: []
}
