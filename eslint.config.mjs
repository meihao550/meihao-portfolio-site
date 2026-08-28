// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettier from 'eslint-config-prettier'

export default withNuxt(
  prettier,
  {
    rules: {
      // Vue 3 はフラグメント（複数ルート）を許可
      'vue/no-multiple-template-root': 'off',
      // 日本語の全角スペースを文字列・コメント内は許容
      'no-irregular-whitespace': [
        'error',
        {
          skipStrings: true,
          skipComments: true,
          skipRegExps: true,
          skipTemplates: true,
        },
      ],
    },
  },
  {
    // Vue の <template> 側は日本語テキスト・HTMLコメントを扱うのでルール自体を無効化
    files: ['**/*.vue'],
    rules: {
      'no-irregular-whitespace': 'off',
    },
  },
)
