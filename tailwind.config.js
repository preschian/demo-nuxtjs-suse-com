module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: '2rem',
        center: 'true',
      },
      colors: {
        orange: {
          DEFAULT: '#FE7C3F',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
