<template>
  <div class="relative" ref="root">
    <button
      type="button"
      @click="isOpen = !isOpen"
      :aria-label="$t('language_switcher.label')"
      :aria-expanded="isOpen"
      class="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-900"
    >
      <span class="text-lg leading-none">{{ currentLocale?.flag }}</span>
      <span>{{ currentLocale?.nativeName }}</span>
      <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 z-50"
      role="listbox"
    >
      <NuxtLink
        v-for="loc in locales"
        :key="loc.code"
        :to="switchLocalePath(loc.code)"
        @click="isOpen = false"
        :class="[
          'flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors',
          loc.code === currentCode ? 'text-primary font-semibold' : 'text-gray-900'
        ]"
        role="option"
        :aria-selected="loc.code === currentCode"
      >
        <span class="text-lg leading-none">{{ loc.flag }}</span>
        <span>{{ loc.nativeName }}</span>
        <span v-if="loc.code === currentCode" class="ml-auto">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'

const { locales, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const isOpen = ref(false)
const root = ref<HTMLElement | null>(null)

const currentCode = computed(() => locale.value)
const currentLocale = computed(() =>
  (locales.value as any[]).find(l => l.code === currentCode.value)
)

function handleClickOutside(event: MouseEvent) {
  if (!isOpen.value) return
  if (root.value && !root.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>
