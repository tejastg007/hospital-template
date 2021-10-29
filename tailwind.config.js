module.exports = {
  purge: [
    "*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        updown: {
          '0%': { transform: 'translateY(10px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        updown: 'updown 2s ease-in-out infinite'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}