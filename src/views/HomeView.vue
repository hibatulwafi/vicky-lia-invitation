<template>
  <main class="relative z-10">
    <!-- Opening overlay -->
    <Transition name="opening">
      <div
        v-if="showOpening"
        class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy"
        style="background: linear-gradient(135deg, #0F172A, #0D1F3C, #0F172A);"
      >
        <div class="text-center">
          <p class="font-sans text-primary-300 tracking-[0.4em] text-xs uppercase mb-6 animate-fade-down">
            Wedding Dinner &amp; Hangout
          </p>
          <h1 class="font-serif text-4xl md:text-6xl font-light text-gradient glow-text animate-fade-in mb-2">
            Vicky Ivan Ardian
          </h1>
          <p class="font-serif italic text-primary-300 text-2xl animate-fade-in mb-2">&amp;</p>
          <h1 class="font-serif text-4xl md:text-6xl font-light text-gradient glow-text animate-fade-in mb-4">
            Nuzulia Rahma S.M
          </h1>
          <p class="font-serif italic text-white/50 text-base animate-fade-up mb-10">
            No Reception. Just Us &amp; You guys.
          </p>
          <button
            @click="openInvitation"
            class="btn-primary text-white animate-fade-up delay-500 flex items-center gap-2 mx-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Buka Undangan 💙
          </button>
        </div>

        <!-- Animated rings -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div class="w-96 h-96 rounded-full border border-primary-900/30 animate-spin-slow"></div>
          <div class="absolute w-72 h-72 rounded-full border border-primary-800/20 animate-spin-slow" style="animation-direction: reverse; animation-duration: 15s;"></div>
          <div class="absolute w-48 h-48 rounded-full border border-primary-700/30 animate-spin-slow" style="animation-duration: 25s;"></div>
        </div>
      </div>
    </Transition>

    <!-- Main content -->
    <div v-show="!showOpening">
      <HeroSection />
      <InvitationCard />
      <EventDetail />
      <CountdownTimer />
      <GallerySection />
      <!-- <RsvpForm /> -->
      <LocationMap />
      <FooterSection />
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import InvitationCard from '@/components/InvitationCard.vue'
import EventDetail from '@/components/EventDetail.vue'
import CountdownTimer from '@/components/CountdownTimer.vue'
import GallerySection from '@/components/GallerySection.vue'
import RsvpForm from '@/components/RsvpForm.vue'
import LocationMap from '@/components/LocationMap.vue'
import FooterSection from '@/components/FooterSection.vue'

const showOpening = ref(true)

function openInvitation() {
  showOpening.value = false
}
</script>

<style scoped>
.opening-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.opening-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>
