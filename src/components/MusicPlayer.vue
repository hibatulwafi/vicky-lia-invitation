<template>
  <div class="fixed bottom-6 right-6 z-50">
    <button
      @click="toggleMusic"
      :class="[
        'w-12 h-12 rounded-full glass-blue glow-blue flex items-center justify-center transition-all duration-300',
        isPlaying ? 'animate-pulse-slow' : ''
      ]"
      :title="isPlaying ? 'Pause music' : 'Play music'"
    >
      <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
      <div v-else class="flex items-end gap-0.5 h-5">
        <div class="w-1 bg-primary-300 rounded-full animate-bounce" style="height: 40%; animation-delay: 0ms"></div>
        <div class="w-1 bg-primary-300 rounded-full animate-bounce" style="height: 100%; animation-delay: 150ms"></div>
        <div class="w-1 bg-primary-300 rounded-full animate-bounce" style="height: 60%; animation-delay: 75ms"></div>
        <div class="w-1 bg-primary-300 rounded-full animate-bounce" style="height: 80%; animation-delay: 225ms"></div>
      </div>
    </button>

    <!-- Letakkan file music di public/music/background.mp3 -->
    <audio ref="audioRef" loop preload="auto">
      <source src="/music/background.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isPlaying = ref(false)
const audioRef = ref(null)

function play() {
  if (!audioRef.value || isPlaying.value) return
  audioRef.value.play().then(() => {
    isPlaying.value = true
  }).catch(() => {})
}

function toggleMusic() {
  if (!audioRef.value) return
  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
  } else {
    play()
  }
}

// Autoplay saat user pertama kali interaksi dengan halaman
function handleFirstInteraction() {
  play()
  document.removeEventListener('click', handleFirstInteraction)
  document.removeEventListener('touchstart', handleFirstInteraction)
}

onMounted(() => {
  document.addEventListener('click', handleFirstInteraction)
  document.addEventListener('touchstart', handleFirstInteraction)
})

onUnmounted(() => {
  document.removeEventListener('click', handleFirstInteraction)
  document.removeEventListener('touchstart', handleFirstInteraction)
})
</script>
