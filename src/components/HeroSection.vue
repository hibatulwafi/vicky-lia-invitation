<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden section-padding">
    <!-- Background gradient orbs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse-slow"
        style="background: radial-gradient(circle, #3B82F6, transparent)"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl animate-pulse-slow"
        style="background: radial-gradient(circle, #1E3A8A, transparent); animation-delay: 2s"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-3xl mx-auto">
      <!-- Pre-title -->
      <p
        class="font-sans text-primary-300 tracking-[0.4em] text-xs uppercase mb-6 opacity-initial"
        :class="{ 'animate-fade-down': mounted }"
      >
        Wedding Dinner &amp; Hangout
      </p>

      <!-- Decorative line -->
      <div class="divider-elegant mb-8 opacity-initial" :class="{ 'animate-fade-in delay-200': mounted }">
        <span class="text-gold text-xl">✦</span>
      </div>

      <!-- Names -->
      <h1
        class="font-serif text-5xl md:text-7xl font-light leading-tight mb-4 opacity-initial"
        :class="{ 'animate-fade-up delay-300': mounted }"
      >
        <span class="text-gradient glow-text">Vicky Ivan Ardian</span>
      </h1>

      <p
        class="font-serif italic text-primary-300 text-2xl md:text-3xl mb-4 opacity-initial"
        :class="{ 'animate-fade-in delay-400': mounted }"
      >
        &amp;
      </p>

      <h1
        class="font-serif text-5xl md:text-7xl font-light leading-tight mb-8 opacity-initial"
        :class="{ 'animate-fade-up delay-500': mounted }"
      >
        <span class="text-gradient glow-text">Nuzulia Rahma S.M</span>
      </h1>

      <!-- Decorative line -->
      <div class="divider-elegant mb-6 opacity-initial" :class="{ 'animate-fade-in delay-600': mounted }">
        <span class="text-gold text-xl">✦</span>
      </div>

      <!-- Tagline -->
      <p
        class="font-serif italic text-white/70 text-lg md:text-xl mb-6 opacity-initial"
        :class="{ 'animate-fade-up delay-700': mounted }"
      >
        No Reception. Just Us &amp; You guys.
      </p>
      <p
        class="font-sans text-white/50 text-sm mb-8 opacity-initial"
        :class="{ 'animate-fade-up delay-700': mounted }"
      >
        Let's celebrate our new journey with good food and fun
      </p>

      <!-- Info pills -->
      <div
        class="flex flex-wrap justify-center gap-3 mb-10 opacity-initial"
        :class="{ 'animate-fade-up delay-800': mounted }"
      >
        <!-- <span class="flex items-center gap-2 px-4 py-2 rounded-full glass-blue font-sans text-sm text-white/80">
          📍 Secret Garden
        </span>
        <span class="flex items-center gap-2 px-4 py-2 rounded-full glass-blue font-sans text-sm text-white/80">
          🕔 17.00 – 19.00
        </span>
        <span class="flex items-center gap-2 px-4 py-2 rounded-full glass-blue font-sans text-sm text-white/80">
          👕 Navy Outfit
        </span> -->
      </div>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-4 justify-center opacity-initial"
        :class="{ 'animate-fade-up delay-900': mounted }"
      >
        <button @click="scrollTo('event')" class="btn-primary text-white">
          Lihat Detail Acara
        </button>
        <!-- <button @click="scrollTo('event')" class="px-8 py-3 rounded-full border border-primary-500/40 font-sans font-medium tracking-wider text-sm uppercase text-primary-300 transition-all duration-300 hover:border-primary-400 hover:text-white hover:bg-primary-900/30">
          Lihat Detail
        </button> -->
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-initial"
      :class="{ 'animate-fade-in delay-1000': mounted }"
    >
      <span class="font-sans text-xs text-white/30 tracking-widest uppercase">Scroll</span>
      <div class="w-px h-12 bg-gradient-to-b from-primary-500/50 to-transparent animate-pulse"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mounted = ref(false)
onMounted(() => {
  setTimeout(() => { mounted.value = true }, 100)
})

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
