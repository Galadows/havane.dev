module.exports = {
  mode: 'jit',
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
        'sans': ['Outfit-SemiBold','FiraCode-SemiBold'],
      },
      animation: {
        blink: 'blink 3s ease-in-out infinite',
        appear: 'appear 3s ease-out',
        disappear: 'disappear 3s ease-out',
        rotate: 'rotate 1s ease-in-out ease-out',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(25deg)' },
        },
        blink: {
          '0%, 34%,66% 100%': { opacity: '100%' },
          '35%, 65%': { opacity: '0%' },
        },
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100%' },
        },
        disappear: {
          '0%': { opacity: '100%' },
          '100%': { opacity: '0' },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
