/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './dashboard.html',
    './App.tsx',
    './*.tsx',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ebf8f6', 100: '#d6f3ef', 200: '#aee5dd',
          300: '#7dd3c8', 400: '#4bb9ab', 500: '#2c9f90',
          600: '#1f7f73', 700: '#1a675d', 800: '#184f49', 900: '#163f3b',
        },
        eco: {
          50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac',
          400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d',
          800: '#166534', 900: '#14532d',
        },
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
