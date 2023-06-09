module.exports = {
  darkMode: 'class',
  extract: {
    include: [
      './components/**/*.{vue,js,ts}',
      './composables/**/*.{js,ts}',
      './features/**/*.{vue,js,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './utils/**/*.{js,ts}',
      './app.vue',
      '../../packages/frontend-module/**.{vue,js,ts}',
    ],
  },
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Poppins'],
      // },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch', // add required value here
          },
        },
      },
    },
  },
}
