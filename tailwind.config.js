/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'company-primary': '#02264f',
        'company-primary-light': '#1a3a6b',
        'company-primary-dark': '#011a3a',
        'company-secondary': '#FFC300',
        'company-secondary-light': '#ffd633',
        'company-secondary-dark': '#e6af00',
        'company-accent': '#f8f9fa',
        'company-text': '#2c3e50',
        'company-text-light': '#6c757d',
      },
    },
  },
  plugins: [],
};