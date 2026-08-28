<!-- 記事ページは白背景なのでそれに合わせたヘッダーの定義 -->
<template>
  <div class="min-h-screen bg-white text-gray-900">
    <header class="border-b border-gray-200">
      <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <NuxtLink to="/" class="text-lg font-semibold tracking-tight"> Meihao-Portfolio </NuxtLink>
        <nav class="flex items-center gap-6 text-sm">
          <NuxtLink
            to="/about"
            class="text-gray-700 hover:text-gray-500 transition-colors"
            active-class="text-gray-900 font-semibold"
          >
            執筆・記事
          </NuxtLink>
          <NuxtLink
            to="/project"
            class="text-gray-700 hover:text-gray-500 transition-colors"
            active-class="text-gray-900 font-semibold"
          >
            個人開発メモ
          </NuxtLink>
        </nav>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
