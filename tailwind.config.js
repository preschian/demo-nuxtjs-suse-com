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
        padding: '1.5rem',
        center: 'true',
      },
      colors: {
        orange: {
          DEFAULT: '#FE7C3F',
        },
        gray: {
          DEFAULT: '#333',
        },
        blue: {
          DEFAULT: '#2453FF',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
