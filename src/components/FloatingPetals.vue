<template>
  <div aria-hidden="true">
    <div
      v-for="petal in petals"
      :key="petal.id"
      class="petal"
      :style="{
        left: petal.x + '%',
        width: petal.size + 'px',
        height: petal.size + 'px',
        animationDuration: petal.duration + 's',
        animationDelay: petal.delay + 's',
        opacity: petal.opacity,
        background: petal.color,
        borderRadius: petal.shape,
        zIndex: 1,
      }"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const petals = ref(
  Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 8 + 4,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.3 + 0.1,
    color: i % 2 === 0
      ? 'rgba(147, 197, 253, 0.4)'
      : 'rgba(201, 168, 76, 0.3)',
    shape: i % 3 === 0 ? '0 50% 50% 50%' : '50%',
  }))
)
</script>
