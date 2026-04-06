<template>
  <div class="stars-container" aria-hidden="true">
    <div
      v-for="star in stars"
      :key="star.id"
      class="star"
      :style="{
        width: star.size + 'px',
        height: star.size + 'px',
        left: star.x + '%',
        top: star.y + '%',
        '--duration': star.duration + 's',
        '--delay': star.delay + 's',
        opacity: star.opacity,
      }"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stars = ref(
  Array.from({ length: 120 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.7 + 0.3,
  }))
)
</script>
