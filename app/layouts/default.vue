<template>
  <div class="min-h-screen bg-white flex flex-col">
    <!-- Header -->
    <header class="pt-8 pb-12 px-6 grid grid-cols-3 items-center max-w-6xl w-full mx-auto">
      <div></div>
      <div class="flex justify-center">
        <NuxtLink :to="localePath('/')">
          <YodlLogo :width="140" :height="58" class="text-gray-900" />
        </NuxtLink>
      </div>
      <div class="flex justify-end">
        <LanguageSwitcher />
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 py-12 px-6">
      <div class="max-w-4xl mx-auto flex justify-between">
        <!-- Left Column -->
        <div class="flex flex-col gap-3">
          <NuxtLink :to="localePath('/')" class="mb-6">
            <YodlLogo :width="80" :height="32" class="text-gray-900" />
          </NuxtLink>
          <NuxtLink :to="localePath('/terms')" class="text-sm text-gray-500 hover:text-gray-900">{{ $t('footer.terms') }}</NuxtLink>
          <NuxtLink :to="localePath('/privacy')" class="text-sm text-gray-500 hover:text-gray-900">{{ $t('footer.privacy') }}</NuxtLink>
          <NuxtLink :to="localePath('/faq')" class="text-sm text-gray-500 hover:text-gray-900">{{ $t('footer.faq') }}</NuxtLink>
          <a href="mailto:humans@yodl.chat" class="text-sm text-gray-500 hover:text-gray-900">humans@yodl.chat</a>
          <p class="text-sm text-gray-500 mt-6">&copy; {{ new Date().getFullYear() }} Yodl</p>
        </div>
        <!-- Right Column -->
        <div class="flex flex-col justify-end">
          <span class="text-sm text-gray-500">142857</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
