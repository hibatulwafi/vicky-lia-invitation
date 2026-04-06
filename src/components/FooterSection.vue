<template>
  <footer class="section-padding relative z-10 text-center border-t border-white/5">
    <div class="max-w-2xl mx-auto">
      <!-- Names -->
      <h2 class="font-serif text-4xl md:text-5xl font-light text-gradient mb-2">Vicky Ivan Ardian & Nuzulia Rahma S.M</h2>
      <p class="font-sans text-white/40 text-xs tracking-widest uppercase mb-8">Wedding Dinner & Hangout — Secret Garden, 17.00 WIB</p>

      <div class="divider-elegant mb-8">
        <span class="text-gold/50 text-base">✦</span>
      </div>

      <!-- Quote -->
      <p class="font-serif italic text-white/60 text-lg leading-relaxed mb-4">
        "No Reception. Just Us & You guys."
      </p>
      <p class="font-sans text-white/40 text-sm mb-8">
        Let's celebrate our new journey with good food and fun.
      </p>

      <!-- Hashtag -->
      <p class="font-sans text-primary-400 tracking-widest text-sm mb-8">#VickyNuzulia2026</p>

      <!-- Share -->
      <div class="flex justify-center gap-4 mb-8">
        <button
          @click="share"
          class="flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary-500/30 font-sans text-sm text-primary-300 hover:border-primary-400 hover:text-white transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Bagikan Undangan
        </button>
      </div>

      <p class="font-sans text-white/20 text-xs">
        Dibuat dengan 💙 untuk Vicky & Nuzulia
      </p>
    </div>
  </footer>
</template>

<script setup>
function share() {
  if (navigator.share) {
    navigator.share({
      title: 'Wedding Dinner & Hangout — Vicky & Nuzulia',
      text: "No Reception. Just Us & You guys. Let's celebrate our new journey! 💙",
      url: window.location.href,
    })
  } else {
    navigator.clipboard.writeText(window.location.href)
    alert('Link undangan telah disalin!')
  }
}
</script>
