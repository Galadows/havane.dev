module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#083D77',
        'primary-dark': '#2B2D42',
        secondary: '#457b9d',
        tertiary: '#F8F8FF',
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
