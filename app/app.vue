<script setup lang="ts">
  const message = ref<string>("Hello world");
</script>

<template>
  <div>
    <header>
      <div class="p-4">
        <a href="/">
          <span class="text-[15px]">Meihao-Portfolio</span>
        </a>
        <nav>
          <a>執筆・記事</a>
        </nav>
      </div>

    </header>
    <NuxtPage />
  </div>
</template>
