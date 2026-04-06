<template>
  <section class="section-padding relative z-10">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="font-sans text-primary-300 tracking-[0.4em] text-xs uppercase mb-4">Momen Indah</p>
        <h2 class="font-serif text-5xl md:text-6xl font-light text-gradient">Galeri Foto</h2>
        <div class="divider-elegant mt-6">
          <span class="text-gold/70 text-lg">✦</span>
        </div>
      </div>

      <!-- Gallery grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="(photo, i) in photos"
          :key="i"
          :class="[
            'rounded-2xl overflow-hidden relative group cursor-pointer',
            i === photos.length - 1 && photos.length % 2 !== 0 ? 'col-span-2 md:col-span-1' : ''
          ]"
          style="aspect-ratio: 1;"
          @click="openModal(photo)"
        >
          <!-- Jika ada src foto, tampilkan img. Jika tidak, tampilkan placeholder gradient -->
          <img
            v-if="photo.src"
            :src="photo.src"
            :alt="photo.caption"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            v-else
            class="w-full h-full transition-transform duration-500 group-hover:scale-110"
            :style="{ background: photo.bg }"
          ></div>

          <!-- Overlay -->
          <div class="absolute inset-0 bg-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <!-- Caption -->
          <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy to-transparent">
            <p class="font-sans text-white/80 text-xs">{{ photo.caption }}</p>
          </div>
        </div>
      </div>

      <!-- Note jika semua foto masih placeholder -->
      <p v-if="allPlaceholder" class="text-center font-sans text-white/30 text-sm mt-8">
        ✨ Foto akan diperbarui setelah hari pernikahan
      </p>
    </div>

    <!-- Modal -->
    <Transition name="modal">
      <div v-if="selectedPhoto" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/90 backdrop-blur-md" @click.self="closeModal">
        <div class="max-w-2xl w-full">
          <div class="rounded-2xl overflow-hidden flex items-center justify-center" style="max-height: 75vh;">
            <img
              v-if="selectedPhoto.src"
              :src="selectedPhoto.src"
              :alt="selectedPhoto.caption"
              class="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-2xl"
            />
            <div v-else class="h-80" :style="{ background: selectedPhoto.bg }"></div>
          </div>
          <p class="text-center font-sans text-white/60 text-sm mt-4">{{ selectedPhoto.caption }}</p>
          <button @click="closeModal" class="block mx-auto mt-4 font-sans text-primary-400 text-sm hover:text-white transition-colors">Tutup</button>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

/**
 * CARA MENAMBAH FOTO:
 * 1. Taruh file foto di folder: public/photos/
 * 2. Tambahkan objek di array ini dengan property:
 *    - src: '/photos/nama-file.jpg'   ← path dari folder public/
 *    - caption: 'Keterangan foto'
 *
 * Contoh:
 * { src: '/photos/prewed1.jpg', caption: 'Prewedding di Pantai' },
 * { src: '/photos/prewed2.jpg', caption: 'Momen Bersama' },
 *
 * Jika src dikosongkan (''), akan tampil placeholder biru.
 */
const photos = [
  { src: '/photos/foto-1.jpeg', caption: 'You feel like home.' },
  { src: '/photos/foto-2.jpeg', caption: 'Found in you.' },
  { src: '/photos/foto-3.jpeg', caption: 'Always together.' },
  { src: '/photos/foto-4.jpeg', caption: 'My favorite person.' },
  { src: '/photos/foto-5.jpeg', caption: 'Made to last.' },
  { src: '/photos/foto-6.jpeg', caption: 'Choosing you, always.' },
  { src: '/photos/foto-7.jpeg', caption: 'Perfect for each other.' },
  { src: '/photos/foto-8.jpeg', caption: 'Wherever you are.' },
  { src: '/photos/foto-9.jpeg', caption: 'The best is ahead.' },
]

const allPlaceholder = computed(() => photos.every(p => !p.src))

const selectedPhoto = ref(null)

function openModal(photo) {
  selectedPhoto.value = photo
}

function closeModal() {
  selectedPhoto.value = null
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from, .modal-leave-to {
  opacity: 0;
}
</style>
