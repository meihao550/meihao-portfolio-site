// https://nuxt.com/docs/api/configuration/nuxt-config
// modulesにはnuxt/contentを認識させるためにつけてる。nuxt/content公式ライブラリをみればわかる。
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  //ページ遷移にCSSの適用がかのう
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Yusei+Magic&display=swap',
        },
      ],
    },
  },
})
