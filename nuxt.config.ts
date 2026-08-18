// https://nuxt.com/docs/api/configuration/nuxt-config
// modulesにはnuxt/contentを認識させるためにつけてる。nuxt/content公式ライブラリをみればわかる。
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content']
})
