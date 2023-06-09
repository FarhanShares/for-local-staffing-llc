export default defineNuxtConfig({
  modules: ['frontend-module', '@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'],
  devServer: {
    https: false,
  },
})
