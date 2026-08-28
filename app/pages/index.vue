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

// OSS 貢献。URL から org/repo/PR番号 は自動抽出
const oss = [
  {
    url: 'https://github.com/vuejs/router/pull/2789',
    description: 'ここに貢献内容の概要を書きます。',
  },
  {
    url: 'https://github.com/laravel/socialite/pull/789',
    description: 'ここに貢献内容の概要を書きます。',
  },
]

// github.com/{org}/{repo}/pull/{number} を分解する
function parseGithubPr(url: string) {
  const m = url.match(/github\.com\/([^/]+)\/([^/]+)\/pull\/(\d+)/)
  return m ? { org: m[1], repo: m[2], number: m[3] } : null
}

// 技術スタック（カテゴリ別）
const techStack = [
  {
    category: 'バックエンド',
    items: ['Python / FastAPI', 'PHP / Laravel', 'SQLAlchemy', 'pytest', 'Pest'],
  },
  {
    category: 'フロントエンド',
    items: ['Vue 3', 'Nuxt 4', 'React', 'Pinia', 'Vue Router', 'axios'],
  },
  {
    category: 'DB',
    items: ['PostgreSQL', 'Supabase', 'SQLite', 'Oracle'],
  },
  {
    category: 'インフラ',
    items: ['Terraform', 'GCP Cloud Run', 'Docker', 'Vercel', 'GitHub Actions'],
  },
  {
    category: 'その他',
    items: ['OR-Tools CP-SAT', 'Hono'],
  },
]

// できること・開発経験
const skills = [
  'Vue.js / Nuxt を使ったフロントエンド開発',
  'FastAPI を使ったバックエンド開発',
  'Laravel + Inertia + React の開発経験',
  'Reactの経験',
  'Discord BOT の開発',
  'SQLAlchemy / Alembic を用いた DB 設計・マイグレーション管理',
  'Git / GitHub を利用したチーム開発',
  'AWS・GCP でのデプロイ経験',
  'インターン経験',
  'OSS 活動',
  'CP-sat(数理最適化ライブラリ)を使った開発経験',
  'CVE 取得経験',
  'Linux 環境での開発',
  'Docker・DevContainer 利用経験',
  '自作サービス開発経験',
  'チーム開発経験',
  'マイクラサーバーの運営 & プラグイン作成',
]

// モットー。（2x2 レイアウト）
const mottos = [
  { motto: '人々の悩みを解決すること', reason: '悩みを解決して喜ぶ姿が好きだから' },
  { motto: '公式ドキュメントを見る', reason: '原理や思想を知った上で、取り組むと自分が満足する' },
  { motto: '設計方式を理解する', reason: '設計がわからないと自分でコーディングできないから' },
  {
    motto: 'AI時代との共存を日々模索する',
    reason: 'AIに頼るのではなく、知識のリピーターとして扱う',
  },
]

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

      <p class="text-gray-20 text-[2vh] pt-4">↓ 自分のSNSサービス</p>
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
    <div class="timeline-scroller mt-20 overflow-x-auto snap-x scroll-px-6 md:scroll-px-8 pb-6">
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
  <!-- モットーセクション -->
  <section class="h-[95vh] bg-white text-gray-900 flex flex-col">
    <!-- 見出し -->
    <div class="max-w-6xl mx-auto w-full px-6 md:px-8 pt-16 md:pt-24">
      <p class="text-xs tracking-[0.3em] text-gray-400">MOTTO</p>
      <h2 class="mt-4 text-4xl md:text-5xl font-bold tracking-tight">大切にしていること</h2>
    </div>

    <!-- 2x2 フレックスグリッド -->
    <div class="flex-1 mx-auto w-full max-w-6xl px-6 md:px-8 py-8">
      <ul class="flex flex-wrap h-full">
        <li v-for="(item, i) in mottos" :key="i" class="w-1/2 h-1/2 p-2">
          <div
            class="h-full p-6 md:p-8 rounded-xl ring-1 ring-gray-200 flex flex-col justify-center hover:shadow-md transition-shadow"
          >
            <p class="text-xs text-gray-400 font-mono tracking-widest">
              {{ String(i + 1).padStart(2, '0') }}
            </p>
            <h3 class="mt-2 text-xl md:text-2xl font-bold">{{ item.motto }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-gray-600">{{ item.reason }}</p>
          </div>
        </li>
      </ul>
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

  <!-- OSS 貢献セクション -->
  <section class="bg-white text-gray-900 py-24">
    <div class="max-w-6xl mx-auto px-6 md:px-8">
      <p class="text-xs tracking-[0.3em] text-gray-400">OSS</p>
      <h2 class="mt-4 text-4xl md:text-5xl font-bold tracking-tight">OSS 貢献</h2>
      <p class="pt-4 text-gray-600">投稿・マージされた PR の記録</p>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <a
          v-for="item in oss"
          :key="item.url"
          :href="item.url"
          target="_blank"
          rel="noopener"
          class="group block rounded-xl ring-1 ring-gray-200 p-6 hover:shadow-md transition-shadow"
        >
          <div class="flex items-start gap-4">
            <NuxtImg
              src="/images/icons8-github-64.png"
              alt=""
              width="32"
              height="32"
              class="w-8 h-8 shrink-0"
            />
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-500">
                {{ parseGithubPr(item.url)?.org }}
              </p>
              <p class="text-lg font-semibold group-hover:text-gray-500 transition-colors truncate">
                {{ parseGithubPr(item.url)?.repo }}
                <span class="text-gray-400 font-mono">
                  #{{ parseGithubPr(item.url)?.number }}
                </span>
              </p>
            </div>
          </div>
          <p class="mt-4 text-sm text-gray-600 leading-relaxed">
            {{ item.description }}
          </p>
          <p class="mt-4 text-xs text-gray-400">View on GitHub →</p>
        </a>
      </div>
    </div>
  </section>

  <!-- できることセクション -->
  <section class="bg-white text-gray-900 py-24">
    <div class="max-w-6xl mx-auto px-6 md:px-8">
      <p class="text-xs tracking-[0.3em] text-gray-400">What Can I Do</p>
      <h2 class="mt-4 text-4xl md:text-5xl font-bold tracking-tight">ふれたこと</h2>
      <p class="pt-4 text-gray-600">これまでに触れた技術・開発経験のまとめ</p>

      <ul class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
        <li v-for="skill in skills" :key="skill" class="flex items-start gap-3 py-2">
          <span class="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
          <span class="text-gray-800 leading-relaxed">{{ skill }}</span>
        </li>
      </ul>
    </div>
  </section>

  <!-- 技術スタックセクション -->
  <section class="bg-gray-50 text-gray-900 py-24">
    <div class="max-w-6xl mx-auto px-6 md:px-8">
      <p class="text-xs tracking-[0.3em] text-gray-400">TECH STACK</p>
      <h2 class="mt-4 text-4xl md:text-5xl font-bold tracking-tight">技術スタック</h2>
      <p class="pt-4 text-gray-600">これまでに扱ってきた技術一覧</p>

      <div class="mt-12 space-y-10">
        <div v-for="cat in techStack" :key="cat.category">
          <h3 class="text-xs tracking-[0.2em] text-gray-500 uppercase font-semibold">
            {{ cat.category }}
          </h3>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="tech in cat.items"
              :key="tech"
              class="px-3 py-1.5 bg-white ring-1 ring-gray-200 rounded-full text-sm text-gray-800 hover:ring-gray-400 transition-colors"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.typed-cursor) {
  color: white;
}

/* タイムラインのスクロールバー（常時表示・細めのカスタム） */
.timeline-scroller {
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: rgb(209 213 219) transparent; /* Firefox: thumb, track */
}
.timeline-scroller::-webkit-scrollbar {
  height: 8px;
}
.timeline-scroller::-webkit-scrollbar-track {
  background: transparent;
}
.timeline-scroller::-webkit-scrollbar-thumb {
  background-color: rgb(209 213 219); /* gray-300 */
  border-radius: 9999px;
}
.timeline-scroller::-webkit-scrollbar-thumb:hover {
  background-color: rgb(156 163 175); /* gray-400 */
}
</style>
