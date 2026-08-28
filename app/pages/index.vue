<script setup lang="ts">
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue'
import type Typed from 'typed.js'

definePageMeta({ layout: 'header' })

const mainStrings = ['高部 紫音', 'KCS大分情報専門学校', '見つけた脆弱性', 'わかる言語']

const subStrings = [
  '2007/03/27',
  '大学併修学科',
  'CVE-2026-73683',
  'Python TypeScript Java PHP etc...',
]

// typed.jsでタイプライター効果を表現 onMoutedでクライアントで処理させている
/*
githubリポジトリ：
https://github.com/mattboldt/typed.js/
*/
const typedElement = useTemplateRef<HTMLElement>('typedEl')
const displaySub = ref('')
let typed: Typed | null = null

// 歴史のタイムライン。ここに追加していく
const history = [
  { date: '2007.03', description: '誕生日' },
  { date: '2024.03', description: '基本情報技術者取得' },
  { date: '2025.08', description: 'SEA/J CTF for Students 優勝' },
  { date: '2026.01', description: 'SEA/J情報セキュリティ技術認定基礎コース（CSBM）取得' },
  { date: '2026.06', description: 'Oracle DBA silver 取得' },
  { date: '2026.06', description: '株式会社もみじAI長期インターン採用' },
  { date: '2026.08', description: 'CVE-2026-73683採番' },
  { date: '2026.08', description: 'SEA/J CTF for Students ３位' },
]

onMounted(async () => {
  const { default: TypedCtor } = await import('typed.js')
  typed = new TypedCtor(typedElement.value!, {
    strings: mainStrings,
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 5000,
    loop: true,
    showCursor: true,
    preStringTyped: () => {
      displaySub.value = ''
    },
    onStringTyped: (pos: number) => {
      displaySub.value = subStrings[pos] ?? ''
    },
  })
})

onUnmounted(() => {
  typed?.destroy()
})
</script>

<template>
  <section class="relative h-[95vh] flex items-center overflow-hidden">
    <NuxtImg
      src="/images/fabrizio-conti.jpg"
      alt=""
      format="webp"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8 text-white">
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight">About Me</h1>
      <div class="mt-8 space-y-1">
        <p class="text-2xl md:text-3xl font-medium min-h-[1.2em]">
          <span ref="typedEl"></span>
        </p>
        <p
          class="text-sm md:text-base text-white/70 min-h-[1.5em] transition-opacity duration-300"
          :class="{ 'opacity-0': !displaySub }"
        >
          {{ displaySub }}
        </p>
      </div>
      <div class="mt-8 flex items-center gap-3 text-sm">
        <a
          href="https://www.wantedly.com/id/shion_takabe"
          target="_blank"
          rel="noopener"
          aria-label="Wantedly"
          class="group inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/60 hover:bg-white transition-colors"
        >
          <NuxtImg
            src="/images/Wantedly_Mark_DarkBG.png"
            alt=""
            width="36"
            height="36"
            class="w-6 h-6 group-hover:invert-0"
          />
        </a>
        <a
          href="https://github.com/meihao550"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          class="group inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/60 hover:bg-white transition-colors z-20"
        >
          <NuxtImg
            src="/images/icons8-github-64.png"
            alt=""
            width="36"
            height="36"
            class="w-6 h-6 invert group-hover:invert-0"
          />
        </a>
      </div>
    </div>
    <!-- アニメーションをつけるためのdivタグ -->
    <div
      class="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white/80 text-xs animate-bounce"
    >
      <p>スクロールしてください</p>
    </div>
  </section>

  <section class="bg-white text-gray-900 py-24">
    <!-- 見出しエリア -->
    <div class="max-w-6xl mx-auto px-6 md:px-8">
      <p class="text-xs tracking-[0.3em] text-gray-400">HISTORY</p>
      <h2 class="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
        <!-- 最初の方をsplitして取り出す。-->
        Started in {{ history[0]?.date.split('.')[0] }}
      </h2>
      <p class="pt-4">資格や実績を簡単に紹介</p>
    </div>

    <!-- 横スクロールのタイムライン -->
    <div class="mt-20 overflow-x-auto snap-x scroll-px-6 md:scroll-px-8">
      <ol class="relative flex items-start gap-16 min-w-max px-6 md:px-8 py-2">
        <li v-for="(item, i) in history" :key="i" class="w-64 shrink-0 snap-start">
          <!-- 日付 -->
          <p class="text-base text-gray-500">{{ item.date }}</p>

          <!-- 横線 + ドット行 -->
          <div class="relative mt-6 flex items-center h-6">
            <!-- 横線：右方向に gap 分だけ延ばして隣とつなぐ -->
            <span class="absolute left-0 -right-16 top-1/2 h-px bg-gray-200 -translate-y-1/2" />
            <!-- 先頭アイテムはハイライトドット、それ以外は小さい点 -->
            <span
              v-if="i === 0"
              class="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white ring-4 ring-gray-200"
            >
              <span class="w-2 h-2 rounded-full bg-gray-500" />
            </span>
            <span v-else class="relative z-10 w-3 h-3 rounded-full bg-gray-400" />
          </div>

          <!-- 説明 -->
          <p class="mt-8 text-sm leading-relaxed text-gray-700 whitespace-pre-line">
            {{ item.description }}
          </p>
        </li>
      </ol>
    </div>
  </section>
  <!--　QiitaやZennでの記事 -->
  <section class="bg-gray-50 text-gray-900 py-24">
    <div class="max-w-6xl mx-auto px-6 md:px-8">
      <p class="text-xs tracking-[0.3em] text-gray-400">ARTICLES</p>
      <h2 class="mt-4 text-4xl md:text-5xl font-bold tracking-tight">執筆・記事</h2>
      <p class="text-2xl pt-4 text-gray-600">自分が書いたピックアップした記事を掲載</p>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <ArticleCard
          url="https://zenn.dev/meihao550/articles/a1561a73696d77"
          title="CVE取れたので脆弱性の説明と学習したこと リプレイ攻撃の脆弱性 - CVE-2026-73683 -"
          published-at="2026.08.15"
        />
        <ArticleCard
          url="https://qiita.com/meihao550/items/6d221dfb6b179b2343b8"
          title="Laravel概要理解から環境構築まで"
          published-at="2026.04.10"
        />
        <ArticleCard
          url="https://qiita.com/meihao550/items/89a1543ec9f62a7cb677"
          title="生成AIでよく言われるLLMとは『確率分布』である　-数学嫌いでも理解する！-"
          published-at="2026.07.23"
        />
        <ArticleCard
          url="https://zenn.dev/meihao550/articles/587a3645fc763a"
          title="Pythonのif __name__ == '__main__'に10分くらいつまづいた話"
          published-at="2026.08.12"
        />
      </div>
    </div>
  </section>

  <section>
    <!-- このセクションでは、わかる言語を書く -->
  </section>
</template>

<style scoped>
:deep(.typed-cursor) {
  color: white;
}
</style>
