module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1d3557',
        secondary: '#457b9d',
        tertiary: '#f1faee',
        'accent-1':'#a8dadc',
        'accent-2': '#e63946',
      },
      fontFamily: {
        'sans': ['Righteous'],
      },
      animation: {
        blink: 'blink 3s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 34%,66% 100%': { opacity: '100%' },
          '35%, 65%': { opacity: '0%' },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
