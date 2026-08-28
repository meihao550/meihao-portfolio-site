<!-- 記事ページは白背景なのでそれに合わせたヘッダーの定義 -->
<template>
  <div class="min-h-screen bg-white text-gray-900">
    <header class="border-b border-gray-200">
      <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" class="text-lg font-semibold tracking-tight"> Meihao-Portfolio </a>
        <nav class="flex items-center gap-6 text-sm">
          <a href="#" class="hover:text-gray-500 transition-colors">執筆・記事</a>
          <a href="#" class="hover:text-gray-500 transition-colors">個人開発メモ</a>
        </nav>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
