<script setup lang="ts">
definePageMeta({ layout: 'header' })

import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue'
import type Typed from 'typed.js'

const mainStrings = ['高部 紫音', 'KCS大分情報専門学校']
const subStrings = ['2007/03/27', '大学併修学科']

// typed.jsでタイプライター効果を表現 onMoutedでクライアントで処理させている
/*
githubリポジトリ：
https://github.com/mattboldt/typed.js/
*/
const typedElement = useTemplateRef<HTMLElement>('typedEl')
const displaySub = ref('')
let typed: Typed | null = null

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
          {{ displaySub || ' ' }}
        </p>
      </div>
      <div class="mt-8 flex items-center gap-3 text-sm">
        <a
          href="https://www.wantedly.com/id/shion_takabe"
          target="_blank"
          rel="noopener"
          class="px-4 py-2 border border-white/60 rounded-full hover:bg-white hover:text-gray-900 transition-colors"
        >
          Wantedly
        </a>
        <a
          href="https://github.com/meihao550"
          target="_blank"
          rel="noopener"
          class="px-4 py-2 border border-white/60 rounded-full hover:bg-white hover:text-gray-900 transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
    <div>
        <p>スクロールしてください</p>
    </div>
  </section>

  <section class="bg-white text-gray-900">
    <div class="max-w-6xl mx-auto px-6 md:px-8 py-24">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight">実績・資格</h2>
      <!-- このセクションでは、実績や資格を書く　例：2026年3月　〜を取得 -->
    </div>
  </section>
</template>

<style scoped>
:deep(.typed-cursor) {
  color: white;
}
</style>
