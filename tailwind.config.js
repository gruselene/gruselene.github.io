/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Lora', 'sans-serif'],
      },
      colors: {
        mystic: {
          950: '#0a0a0c', // 深邃黑
          900: '#141418', // 暗夜黑
          800: '#1e1e24', // 深空灰
          700: '#2d2d35',
          300: '#a3a3b3',
          100: '#e1e1e6',
        },
        gold: {
          50: '#fffcf2',
          100: '#fff9e6',
          200: '#ffefbf',
          300: '#ffe08a',
          400: '#ffd152',
          500: '#ffbf00', // 核心金色
          600: '#e6ac00',
          700: '#bf8f00',
          800: '#997300',
          900: '#735600',
        },
        crimson: {
          900: '#4a0e0e',
          800: '#6b1414',
          700: '#8c1a1a',
        }
      },
      backgroundImage: {
        'parchment': "url('https://www.transparenttextures.com/patterns/p6.png')", // 微妙的纸张纹理
      }
    },
  },
  plugins: [],
}
