<template>
  <section class="section-padding relative z-10">
    <div class="max-w-3xl mx-auto text-center">
      <p class="font-sans text-primary-300 tracking-[0.4em] text-xs uppercase mb-4">Menuju Hari Bahagia</p>
      <h2 class="font-serif text-4xl md:text-5xl font-light text-gradient mb-12">Hitung Mundur</h2>

      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="unit in timeUnits"
          :key="unit.label"
          class="glass-blue rounded-2xl p-4 md:p-6 text-center"
          style="box-shadow: 0 4px 30px rgba(30, 58, 138, 0.4);"
        >
          <div class="font-serif text-5xl md:text-7xl font-light text-gradient leading-none mb-2">
            {{ unit.value.toString().padStart(2, '0') }}
          </div>
          <div class="font-sans text-primary-300 text-xs tracking-widest uppercase">{{ unit.label }}</div>
        </div>
      </div>

      <p v-if="isPast" class="font-serif italic text-primary-300 text-xl mt-8">
        Semoga menjadi pernikahan yang barokah 💙
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const targetDate = new Date('2026-04-11T17:00:00')
const now = ref(new Date())
let timer = null

const diff = computed(() => targetDate - now.value)
const isPast = computed(() => diff.value <= 0)

const timeUnits = computed(() => {
  const d = Math.max(0, diff.value)
  const totalSeconds = Math.floor(d / 1000)
  return [
    { label: 'Hari', value: Math.floor(totalSeconds / 86400) },
    { label: 'Jam', value: Math.floor((totalSeconds % 86400) / 3600) },
    { label: 'Menit', value: Math.floor((totalSeconds % 3600) / 60) },
    { label: 'Detik', value: totalSeconds % 60 },
  ]
})

onMounted(() => {
  timer = setInterval(() => { now.value = new Date() }, 1000)
})
onUnmounted(() => clearInterval(timer))
</script>
