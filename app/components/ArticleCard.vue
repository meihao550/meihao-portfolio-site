<script setup lang="ts">
interface Props {
  url: string
  title: string
  tag?: string
  publishedAt?: string
  image?: string
}

const props = defineProps<Props>()

// tag が明示されなければ URL のドメインから自動判定
const displayTag = computed(() => {
  if (props.tag) return props.tag
  if (props.url.includes('qiita.com')) return 'Qiita'
  if (props.url.includes('zenn.dev')) return 'Zenn'
  return '記事'
})

// image が明示されなければ URL のドメインからロゴを引く
const logoImage = computed(() => {
  if (props.url.includes('qiita.com')) return '/images/Qiita_Logo.svg.png'
  if (props.url.includes('zenn.dev')) return '/images/logo-only.svg'
  return null
})

const displayImage = computed(() => props.image ?? logoImage.value)

// ユーザー指定の画像がなくロゴ自動判定にフォールバックした場合は
// object-cover ではなく中央配置で見せる
const isLogo = computed(() => !props.image && logoImage.value !== null)
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener"
    class="group block bg-white rounded-xl overflow-hidden ring-1 ring-gray-200 hover:shadow-lg transition-shadow"
  >
    <!-- サムネイル -->
    <div
      class="aspect-video overflow-hidden"
      :class="
        isLogo
          ? 'bg-white flex items-center justify-center'
          : 'bg-gradient-to-br from-gray-100 to-gray-200'
      "
    >
      <NuxtImg
        v-if="displayImage"
        :src="displayImage"
        :alt="title"
        :class="
          isLogo
            ? 'h-20 w-auto object-contain'
            : 'w-full h-full object-cover group-hover:scale-105 transition-transform'
        "
      />
    </div>

    <!-- 本文 -->
    <div class="p-6">
      <span class="inline-block px-3 py-1 text-xs text-gray-700 bg-gray-100 rounded">
        {{ displayTag }}
      </span>
      <h3
        class="mt-4 text-base font-semibold leading-relaxed line-clamp-2 group-hover:text-gray-500 transition-colors"
      >
        {{ title }}
      </h3>
      <p v-if="publishedAt" class="mt-4 text-xs text-gray-500">
        {{ publishedAt }}
      </p>
    </div>
  </a>
</template>
