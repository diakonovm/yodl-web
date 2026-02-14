<template>
  <div>
    <!-- Hero Section -->
    <section class="px-4 text-center max-w-4xl mx-auto">
      <!-- Badges -->
      <div class="flex flex-wrap justify-center gap-3 mb-6">
        <div class="inline-flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded-full text-sm font-medium">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Available for iPhone
        </div>
        <div class="inline-flex items-center gap-2 bg-gray-100 text-gray-500 px-4 py-2 rounded-full text-sm font-medium">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.523 15.341a.5.5 0 0 0-.5.5v1.118a.5.5 0 0 0 1 0V15.84a.5.5 0 0 0-.5-.5zm-11.046 0a.5.5 0 0 0-.5.5v1.118a.5.5 0 0 0 1 0V15.84a.5.5 0 0 0-.5-.5zM15.74 8.61l1.14-2.063a.236.236 0 1 0-.413-.228l-1.154 2.09a7.03 7.03 0 0 0-2.79-.571c-1.01 0-1.966.208-2.834.583L8.533 6.319a.236.236 0 1 0-.413.228l1.14 2.066A6.47 6.47 0 0 0 5.5 14.09h13c0-2.306-1.2-4.33-3.01-5.48h.25zM9.04 12.088a.625.625 0 1 1 0-1.25.625.625 0 0 1 0 1.25zm5.92 0a.625.625 0 1 1 0-1.25.625.625 0 0 1 0 1.25zM5.5 15.09v5.41a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h7v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5.41h-13z"/>
          </svg>
          Coming soon to Android
        </div>
      </div>

      <!-- Headline -->
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
        Meet real people worldwide.<br>Practice any language.
      </h2>
      <p class="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        Connect with native speakers, exchange text and audio messages, and help each other learn with corrections and translations.
      </p>
    </section>

    <!-- Bento Grid -->
    <section class="px-4 max-w-6xl mx-auto mb-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <!-- Left Column - Phone Mockup -->
        <div class="bg-secondary rounded-2xl p-6 flex flex-col items-center justify-center min-h-[400px]">
          <div class="w-48 h-80 bg-gray-900 rounded-[2.5rem] shadow-xl flex items-center justify-center border-4 border-gray-800">
            <div class="w-44 h-72 bg-white rounded-[2rem] flex items-center justify-center">
              <span class="text-primary text-2xl font-bold">Yodl</span>
            </div>
          </div>
          <p class="mt-6 text-center text-gray-700 font-medium">
            Connect with people<br>around the world
          </p>
        </div>

        <!-- Center Column - Stacked Cards -->
        <div class="flex flex-col gap-3">
          <!-- Stats Card -->
          <div class="bg-primary rounded-2xl p-6 text-white">
            <div class="flex justify-around text-center">
              <div>
                <div class="text-2xl font-bold">10K+</div>
                <div class="text-sm opacity-80">Users</div>
              </div>
              <div>
                <div class="text-2xl font-bold">1M+</div>
                <div class="text-sm opacity-80">Messages</div>
              </div>
              <div>
                <div class="text-2xl font-bold">100+</div>
                <div class="text-sm opacity-80">Countries</div>
              </div>
            </div>
          </div>

          <div class="bg-secondary rounded-2xl p-6 flex-1">
            <div class="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Text & Audio Messages</h3>
            <p class="text-gray-600">Chat with native speakers through text or voice messages at your own pace.</p>
          </div>

          <div class="bg-secondary rounded-2xl p-6 flex-1">
            <div class="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Corrections & Translations</h3>
            <p class="text-gray-600">Help each other improve with inline corrections and instant translations.</p>
          </div>
        </div>

        <!-- Right Column - Phone Mockup -->
        <div class="bg-secondary rounded-2xl p-6 flex flex-col items-center justify-center min-h-[400px]">
          <div class="w-48 h-80 bg-gray-900 rounded-[2.5rem] shadow-xl flex items-center justify-center border-4 border-gray-800">
            <div class="w-44 h-72 bg-white rounded-[2rem] flex items-center justify-center">
              <svg class="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
              </svg>
            </div>
          </div>
          <p class="mt-6 text-center text-gray-700 font-medium">
            Practice any<br>language naturally
          </p>
        </div>
      </div>
    </section>

    <!-- Download Section -->
    <section class="px-4 text-center pb-16">
      <a href="#" class="inline-flex items-center justify-center gap-3 bg-gray-900 text-white w-full md:w-auto px-12 py-4 rounded-xl hover:bg-gray-800 transition-colors drop-shadow-lg">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div class="text-left">
          <div class="text-xs text-gray-400">Download on the</div>
          <div class="text-lg font-semibold">App Store</div>
        </div>
      </a>
      <p class="mt-4 text-sm text-gray-500">Requires iOS 18.2 or later</p>
    </section>
  </div>
</template>
