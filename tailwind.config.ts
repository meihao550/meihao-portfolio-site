import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        // 全体のデフォルトフォント（Tailwind の preflight で body に適用される）
        sans: ['"M PLUS Rounded 1c"', '"Noto Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // 個別に使いたい場合の追加ファミリ
        note: ['"Noto Sans"', 'sans-serif'],
        magic: ['"Yusei Magic"', 'sans-serif'],
      },
    },
  },
}
