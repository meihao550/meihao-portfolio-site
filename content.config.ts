import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
  },
})

// 公式ドキュメントに記載あり[ https://content.nuxt.com/docs/getting-started/installation ]
