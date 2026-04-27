// https://nuxt.com/docs/api/configuration/nuxt-config
const SITE_URL = 'https://yodl.chat'
const SITE_NAME = 'Yodl'
const SITE_DESCRIPTION = 'Meet real people around the world and practice any language.'
const SITE_OG_IMAGE = `${SITE_URL}/og-image.png`

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: SITE_NAME,
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'description', content: SITE_DESCRIPTION },

        // Open Graph (Facebook, LinkedIn, iMessage, Slack, Discord)
        { property: 'og:site_name', content: SITE_NAME },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: SITE_URL },
        { property: 'og:title', content: SITE_NAME },
        { property: 'og:description', content: SITE_DESCRIPTION },
        { property: 'og:image', content: SITE_OG_IMAGE },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Yodl — language exchange app' },
        { property: 'og:locale', content: 'en_US' },

        // Twitter / X
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: SITE_NAME },
        { name: 'twitter:description', content: SITE_DESCRIPTION },
        { name: 'twitter:image', content: SITE_OG_IMAGE },
        { name: 'twitter:image:alt', content: 'Yodl — language exchange app' }
      ],
      link: [
        { rel: 'canonical', href: SITE_URL },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap'
        }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            logo: SITE_OG_IMAGE,
            description: SITE_DESCRIPTION,
            email: 'humans@yodl.chat'
          })
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_NAME,
            url: SITE_URL,
            description: SITE_DESCRIPTION
          })
        }
      ]
    }
  }
})
