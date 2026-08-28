<template>
  <div class="relative min-h-screen">
    <header class="absolute top-0 left-0 right-0 z-20 text-white">
      <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <NuxtLink to="/" class="text-lg font-semibold tracking-tight"> Meihao-Portfolio </NuxtLink>
        <nav class="flex items-center gap-6 text-sm">
          <NuxtLink
            to="/about"
            class="hover:opacity-70 transition-opacity"
            active-class="font-semibold"
          >
            執筆・記事
          </NuxtLink>
          <NuxtLink
            to="/project"
            class="hover:opacity-70 transition-opacity"
            active-class="font-semibold"
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
