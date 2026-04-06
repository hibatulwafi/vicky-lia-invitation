<template>
  <div class="min-h-screen bg-navy relative">
    <!-- Stars background -->
    <StarsBackground />

    <!-- Floating petals -->
    <FloatingPetals />

    <!-- Music Player -->
    <MusicPlayer />

    <!-- Router View -->
    <RouterView />
  </div>
</template>

<script setup>
import StarsBackground from '@/components/StarsBackground.vue'
import FloatingPetals from '@/components/FloatingPetals.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'
</script>
