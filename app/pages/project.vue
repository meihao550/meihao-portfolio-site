<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import type { Project } from '~/types/project'

definePageMeta({ layout: 'defaultheader' })

const projects: Project[] = [
  {
    name: 'AI-Shifts-Management',
    shortDescription: 'AI（数理最適化）でシフトを自動生成するアプリ',
    detailedDescription:
      'ここに詳細な説明を書きます。技術構成・工夫した点・つまづいた点などを記載。',
    isPrivate: true,
    tags: ['Python', 'FastAPI', 'OR-Tools CP-SAT'],
  },
  {
    name: 'Esperant',
    shortDescription: '大学生向けのコミュニティサイト',
    detailedDescription: 'ここに詳細な説明を書きます。',
    url: 'https://github.com/meihao550/Esperant',
    tags: ['Vue', 'Nuxt'],
  },
  {
    name: 'MoneyManagementApp',
    shortDescription: '個人の家計や資金を管理するアプリ',
    detailedDescription: 'ここに詳細な説明を書きます。',
    url: 'https://github.com/meihao550/MoneyManagementApp',
    tags: ['TypeScript'],
  },
]

// モーダルで表示するプロジェクト。null なら閉じている状態
const selectedProject = ref<Project | null>(null)

function openProject(project: Project) {
  selectedProject.value = project
}

function closeProject() {
  selectedProject.value = null
}

// Esc キーで閉じる
function handleEscape(e: KeyboardEvent) {
  if (e.key === 'Escape') closeProject()
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})

// モーダル表示中は背面スクロールをロック
watch(selectedProject, (val) => {
  if (import.meta.client) {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})
</script>

<template>
  <section class="max-w-6xl mx-auto px-6 md:px-8 py-24">
    <!-- 見出し -->
    <div>
      <p class="text-xs tracking-[0.3em] text-gray-400">PROJECTS</p>
      <h1 class="mt-4 text-4xl md:text-5xl font-bold tracking-tight">個人開発</h1>
      <p class="pt-4 text-gray-600">個人で企画・開発しているプロジェクト</p>
    </div>

    <!-- カードグリッド -->
    <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project="project"
        @open="openProject"
      />
    </div>

    <!-- モーダル -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="selectedProject"
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
          @click.self="closeProject"
        >
          <!-- 背景オーバーレイ -->
          <div class="absolute inset-0 bg-black/50" @click="closeProject" />

          <!-- カード本体 -->
          <div
            class="relative bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 md:p-10"
            role="dialog"
            aria-modal="true"
          >
            <!-- 閉じるボタン -->
            <button
              type="button"
              aria-label="閉じる"
              class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              @click="closeProject"
            >
              ✕
            </button>

            <p class="text-xs tracking-[0.3em] text-gray-400">PROJECT</p>
            <h2 class="mt-2 text-2xl md:text-3xl font-bold tracking-tight break-words pr-8">
              {{ selectedProject.name }}
            </h2>

            <!-- タグと Private バッジ -->
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="tag in selectedProject.tags"
                :key="tag"
                class="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded-full"
              >
                {{ tag }}
              </span>
              <span
                v-if="selectedProject.isPrivate"
                class="px-3 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full"
              >
                Private
              </span>
            </div>

            <!-- 詳細本文 -->
            <p class="mt-6 text-sm md:text-base leading-relaxed text-gray-700 whitespace-pre-line">
              {{ selectedProject.detailedDescription }}
            </p>

            <!-- GitHub リンク -->
            <a
              v-if="selectedProject.url"
              :href="selectedProject.url"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 mt-8 px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm hover:bg-gray-700 transition-colors"
            >
              GitHub で見る →
            </a>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
/* モーダルのフェード */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
