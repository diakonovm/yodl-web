<template>
  <div class="px-4 py-8 max-w-3xl mx-auto">
    <p v-if="!isEnglish" class="text-sm text-gray-500 italic mb-4">{{ $t('english_only_notice') }}</p>
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
    <div class="prose prose-gray">
      <p class="text-gray-600 mb-6">Last updated: July 2026</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
      <p class="text-gray-600 mb-4">These Terms of Service ("Terms") govern your use of the Yodl mobile application and website (the "Service"), operated by Yodl ("we", "us"). By creating an account or using the Service you agree to these Terms and to our <NuxtLink to="/privacy" class="text-primary hover:underline">Privacy Policy</NuxtLink>. If you do not agree, do not use the Service.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Eligibility and Your Account</h2>
      <p class="text-gray-600 mb-4">You must be at least 18 years old to use Yodl. You are responsible for the accuracy of the information on your profile and for all activity on your account. You may sign in with email, Google, or Apple; keep access to that sign-in method secure. Notify us immediately if you believe your account has been compromised.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Community Rules and Content Guidelines</h2>
      <p class="text-gray-600 mb-4">Yodl is for meeting people and practicing languages. You agree not to use the Service to: harass, threaten, or abuse others; send spam or unsolicited promotion; impersonate any person; share sexually explicit, violent, or hateful content; solicit money from other users; violate any law; or attempt to access other users' accounts or our systems without authorization.</p>
      <p class="text-gray-600 mb-4">You can report or block any user directly in the app. We may remove content and suspend or terminate accounts that violate these rules, at our discretion and without prior notice.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Your Content</h2>
      <p class="text-gray-600 mb-4">You retain ownership of the content you create on Yodl (messages, photos, voice recordings, and posts). You grant us a limited, worldwide, royalty-free license to host, store, transmit, and display that content solely to operate and provide the Service. This license ends when the content or your account is deleted, except that messages you have sent to other users remain part of those users' conversations, and except where retention is required by law.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Subscriptions and Payments</h2>
      <p class="text-gray-600 mb-4">Yodl offers optional paid subscriptions that unlock premium features. Subscriptions are purchased through Apple and are subject to Apple's payment terms. They renew automatically unless cancelled at least 24 hours before the end of the current period; you can manage or cancel them in your App Store account settings. Refunds are handled by Apple in accordance with their policies. We may change subscription pricing or features with notice; changes apply from your next billing period.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Intellectual Property</h2>
      <p class="text-gray-600 mb-4">The Service — including its design, branding, and software — is owned by us or our licensors and protected by intellectual-property laws. We grant you a personal, non-exclusive, non-transferable license to use the app on your devices for personal, non-commercial use. You may not copy, modify, reverse engineer, or redistribute the Service except as permitted by law.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Disclaimers</h2>
      <p class="text-gray-600 mb-4">The Service is provided "as is" and "as available", without warranties of any kind, express or implied. Yodl connects you with real people; we do not vet users and are not responsible for their conduct, online or offline. Use good judgment when interacting with people you meet on the Service. Translations and language corrections are provided for learning purposes and may contain errors.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Limitation of Liability</h2>
      <p class="text-gray-600 mb-4">To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data, arising from your use of the Service. Our total liability for any claim relating to the Service is limited to the greater of the amount you paid us in the twelve months before the claim or fifty (50) US dollars. Nothing in these Terms limits liability that cannot be limited by law.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Termination</h2>
      <p class="text-gray-600 mb-4">You may stop using the Service and delete your account at any time from the app's account settings. We may suspend or terminate your access if you violate these Terms or if required to protect the Service or its users. Sections 4, 6, 7, 8, and 10 survive termination.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Governing Law</h2>
      <p class="text-gray-600 mb-4">These Terms are governed by the laws of the jurisdiction in which Yodl is established, without regard to conflict-of-law rules. Disputes will be resolved in the courts of that jurisdiction, unless mandatory consumer-protection law in your country of residence provides otherwise.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">11. Changes to These Terms</h2>
      <p class="text-gray-600 mb-4">We may update these Terms from time to time. We'll post the updated version here and update the date above; for material changes we'll notify you in the app. Continued use of the Service after changes take effect constitutes acceptance.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">12. Contact</h2>
      <p class="text-gray-600 mb-4">Questions about these Terms? Contact us at <a href="mailto:humans@yodl.chat" class="text-primary hover:underline">humans@yodl.chat</a>.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const { locale } = useI18n()
const isEnglish = computed(() => locale.value === 'en')
</script>
