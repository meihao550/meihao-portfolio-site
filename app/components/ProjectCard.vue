<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{
  project: Project
}>()

defineEmits<{
  open: [project: Project]
}>()
</script>

<template>
  <div
    class="group flex flex-col bg-white rounded-xl ring-1 ring-gray-200 p-6 hover:shadow-md transition-shadow"
  >
    <!-- タイトル + Private バッジ -->
    <div class="flex items-start justify-between gap-3">
      <h3 class="text-lg font-semibold text-gray-900 break-words">
        {{ project.name }}
      </h3>
      <span
        v-if="project.isPrivate"
        class="shrink-0 px-2 py-0.5 text-xs bg-yellow-100 text-yellow-800 rounded"
      >
        Private
      </span>
    </div>

    <!-- 一行説明 -->
    <p class="mt-3 text-sm text-gray-600 leading-relaxed flex-1">
      {{ project.shortDescription }}
    </p>

    <!-- 詳細を見るボタン -->
    <button
      type="button"
      class="mt-6 self-start text-sm text-gray-900 font-semibold hover:text-gray-500 transition-colors"
      @click="$emit('open', project)"
    >
      詳細を見る →
    </button>
  </div>
</template>
