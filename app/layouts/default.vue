<template>
  <div class="min-h-screen bg-white flex flex-col">
    <!-- Header -->
    <header class="pt-8 pb-12 flex justify-center">
      <NuxtLink to="/">
        <YodlLogo :width="110" :height="45" class="text-gray-900" />
      </NuxtLink>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 py-8 px-4">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-500">&copy; 2025 Yodl. All rights reserved.</p>
        <nav class="flex gap-6">
          <NuxtLink to="/terms" class="text-sm text-gray-500 hover:text-gray-900">Terms of Service</NuxtLink>
          <NuxtLink to="/privacy" class="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</NuxtLink>
        </nav>
      </div>
    </footer>
  </div>
</template>
