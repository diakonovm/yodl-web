<template>
  <div class="px-4 py-8 max-w-3xl mx-auto">
    <p v-if="!isEnglish" class="text-sm text-gray-500 italic mb-4">{{ $t('english_only_notice') }}</p>
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
    <div class="prose prose-gray">
      <p class="text-gray-600 mb-6">Last updated: July 2026</p>

      <p class="text-gray-600 mb-4">This Privacy Policy explains how Yodl ("Yodl", "we", "us") collects, uses, and protects your information when you use the Yodl mobile application and website (together, the "Service"). By using Yodl, you agree to the practices described here.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
      <p class="text-gray-600 mb-4"><strong>Account information.</strong> When you create an account we collect your email address and the profile details you choose to provide: display name, gender, country, languages you speak and are learning, and profile photos.</p>
      <p class="text-gray-600 mb-4"><strong>Sign-in with Google or Apple.</strong> If you sign in with Google or Apple, we receive your name, email address, and (for Google) your profile picture from that provider. We use this information solely to create and authenticate your Yodl account. We do not receive your password, and we do not access any other data from your Google or Apple account.</p>
      <p class="text-gray-600 mb-4"><strong>Content you create.</strong> Messages you send and receive (text, voice, and photos), corrections and translations you request, and posts you share with the community. Message content is stored so it can be delivered and synced across your devices.</p>
      <p class="text-gray-600 mb-4"><strong>Location.</strong> With your permission, we collect your approximate location to power features like discovering language partners near you and to comply with regional availability requirements. You can use Yodl without granting location access; nearby features will be unavailable.</p>
      <p class="text-gray-600 mb-4"><strong>Purchases.</strong> If you subscribe to a paid plan, the purchase is processed by Apple. We receive subscription status (not your payment details) to unlock premium features.</p>
      <p class="text-gray-600 mb-4"><strong>Device and usage information.</strong> Device type, app version, push notification tokens, language and timezone settings, and basic usage data that helps us operate and improve the Service.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
      <p class="text-gray-600 mb-4">We use your information to: create and secure your account; deliver messages and sync them across devices; show your profile to other users so they can find language partners; provide translations, corrections, and other learning features; suggest nearby or relevant partners; send push notifications you've enabled; process subscriptions; enforce our Terms of Service (including moderation of reported content); and improve the Service.</p>
      <p class="text-gray-600 mb-4">We do not sell your personal information, and we do not use your message content for advertising.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Data Sharing and Disclosure</h2>
      <p class="text-gray-600 mb-4"><strong>Other users.</strong> Your profile (name, photos, country, languages, and posts) is visible to other Yodl users. Messages are visible to the participants of the conversation.</p>
      <p class="text-gray-600 mb-4"><strong>Service providers.</strong> We use trusted providers to operate Yodl: Supabase (authentication and database hosting), Cloudflare (media storage and website hosting), Apple (payments and sign-in), Google (sign-in), and Superwall (subscription management). These providers process data only on our behalf and under contractual safeguards.</p>
      <p class="text-gray-600 mb-4"><strong>Translation providers.</strong> When you request a translation or correction of a message, the text of that message is sent to a third-party AI or translation provider (such as OpenAI) solely to generate the translation or correction. This happens only for messages you explicitly ask to have translated or corrected, and the content is not used by us for advertising.</p>
      <p class="text-gray-600 mb-4"><strong>Google user data.</strong> Information we receive from Google Sign-In is used only for authentication as described above. It is never sold, never used for advertising, and never shared with third parties except the service providers that host our authentication infrastructure.</p>
      <p class="text-gray-600 mb-4"><strong>Legal requirements.</strong> We may disclose information if required by law, or to protect the rights and safety of our users and the public.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Data Retention and Deletion</h2>
      <p class="text-gray-600 mb-4">We keep your data for as long as your account is active. You can delete individual messages for all participants at any time. You can delete your entire account directly in the app from your account settings; this permanently removes your profile, photos, and account data from our systems within 30 days, except where we are legally required to retain certain records. Because conversations are shared with the people you chatted with, messages you have already sent may remain visible to those users after your account is deleted; they are no longer linked to an active profile.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
      <p class="text-gray-600 mb-4">All data is encrypted in transit. Access to production systems is restricted and authenticated. No method of transmission or storage is 100% secure, but we work to protect your information using industry-standard practices.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Where Your Data Is Processed</h2>
      <p class="text-gray-600 mb-4">Yodl is a global service. Your data is hosted on infrastructure operated by our service providers, primarily in the United States, and may be processed in countries other than the one you live in. Where required — including for users in the EEA and UK — international transfers rely on appropriate safeguards such as Standard Contractual Clauses with our providers.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Your Rights and Legal Bases</h2>
      <p class="text-gray-600 mb-4">Where GDPR or similar laws apply, we process your data on these legal bases: performance of our contract with you (operating your account and delivering the Service), our legitimate interests (keeping the Service secure, preventing abuse, and improving features), your consent (location access and push notifications, which you can withdraw at any time in your device settings), and compliance with legal obligations.</p>
      <p class="text-gray-600 mb-4">Depending on where you live, you may have rights to access, correct, export, or delete your personal data, and to object to or restrict certain processing. You can exercise most of these directly in the app, or by contacting us at the address below. If you're in the EEA/UK, you also have the right to lodge a complaint with your supervisory authority.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Children</h2>
      <p class="text-gray-600 mb-4">Yodl is not directed at children and may not be used by anyone under 18. We do not knowingly collect data from anyone under 18; if we learn we have, we will delete it.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to This Policy</h2>
      <p class="text-gray-600 mb-4">We may update this policy from time to time. We'll post the updated version here and update the date above; for material changes we'll notify you in the app.</p>

      <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
      <p class="text-gray-600 mb-4">If you have any questions about this Privacy Policy or your data, contact us at <a href="mailto:humans@yodl.chat" class="text-primary hover:underline">humans@yodl.chat</a>.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const { locale } = useI18n()
const isEnglish = computed(() => locale.value === 'en')
</script>
