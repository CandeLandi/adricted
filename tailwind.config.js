/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        fadeInDown: {
          'from': { 
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInUp: {
          'from': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fadeIn': 'fadeIn 1.2s ease-out forwards',
        'fadeInDown': 'fadeInDown 1s ease-out',
        'fadeInUp': 'fadeInUp 0.8s ease forwards'
      }
    },
  },
  plugins: [],
} 