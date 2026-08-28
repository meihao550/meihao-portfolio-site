<script setup lang="ts">
definePageMeta({ layout: 'defaultheader' })

// 使用技術。カテゴリごとに分類
const techStack = [
  {
    category: 'フレームワーク',
    items: [
      {
        name: 'Nuxt 4',
        reason:
          'Vue ベースで SSR/SSG/SPA を柔軟に切り替えでき、ファイルベースルーティングやモジュール生態系が強力なため採用',
      },
      {
        name: 'Vue 3',
        reason:
          'Composition API による記述の見通しやコンポーネント指向の相性が良く、Nuxt との組み合わせで自然に使える',
      },
    ],
  },
  {
    category: '言語',
    items: [
      {
        name: 'TypeScript',
        reason: '型安全性を担保することで、リファクタや将来的な拡張時の不安を減らす',
      },
    ],
  },
  {
    category: 'スタイリング',
    items: [
      {
        name: 'Tailwind CSS',
        reason:
          'ユーティリティファーストで一貫したデザインを高速に組めるうえ、命名疲れが起きにくい',
      },
    ],
  },
  {
    category: 'ライブラリ',
    items: [
      {
        name: 'typed.js',
        reason: 'ヒーローセクションのタイプライター演出。フレームワーク非依存で軽量',
      },
      {
        name: '@nuxt/image',
        reason: '画像の WebP 自動変換・遅延読み込み・レスポンシブ配信',
      },
      {
        name: '@nuxt/content',
        reason: 'Markdown ベースで記事コンテンツを扱えるようにするため',
      },
    ],
  },
  {
    category: '開発ツール・CI',
    items: [
      {
        name: 'ESLint + Prettier',
        reason: 'コードスタイルの統一と静的解析。CI で自動チェック',
      },
      {
        name: 'Vitest + @nuxt/test-utils',
        reason: 'Vite ネイティブの高速テストランナー。Nuxt 環境で単体テストを回せる',
      },
      {
        name: 'GitHub Actions',
        reason: 'PR 作成・main への push で Lint / Format / 型 / テスト / ビルドを自動検証',
      },
    ],
  },
]
</script>

<template>
  <section class="max-w-4xl mx-auto px-6 md:px-8 py-24">
    <!-- 見出し -->
    <div class="text-center">
      <p class="text-xs tracking-[0.3em] text-gray-400">ABOUT</p>
      <h1 class="mt-4 text-4xl md:text-5xl font-bold tracking-tight">このサイトについて</h1>
      <p class="mt-6 text-sm md:text-base text-gray-500">
        自己紹介・実績・執筆記事・個人開発のまとめとして制作したポートフォリオサイトです。
      </p>
    </div>

    <!-- 目的 -->
    <div class="mt-20">
      <h2 class="text-2xl font-bold tracking-tight">目的</h2>
      <div class="mt-6 space-y-4 text-base leading-relaxed text-gray-700">
        <p>
          ポートフォリオはWantedlyなどのサービスに任せていましたが、今回開発したいのも相まって、ポートフォリオサイトを作成してみることにしました。
        </p>
        <p>
          また、サイト自体を個人開発の作例と位置付け、
          「なぜその技術を選んだか」を透明にしておくことで、
          将来自分が振り返る時にも他の人が参考にする時にも読める形を意識しています。
        </p>
      </div>
    </div>

    <!-- 使用技術 -->
    <div class="mt-20">
      <h2 class="text-2xl font-bold tracking-tight">使用している技術</h2>
      <p class="mt-4 text-sm text-gray-500">
        このサイトそのものが個人開発の作例なので、選定理由を添えて記録しています。
      </p>

      <div class="mt-10 space-y-12">
        <div v-for="section in techStack" :key="section.category">
          <h3 class="text-lg font-semibold text-gray-800">{{ section.category }}</h3>
          <ul class="mt-4 space-y-4">
            <li
              v-for="item in section.items"
              :key="item.name"
              class="border-l-2 border-gray-200 pl-4"
            >
              <p class="font-semibold text-gray-900">{{ item.name }}</p>
              <p class="mt-1 text-sm text-gray-600 leading-relaxed">
                {{ item.reason }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
