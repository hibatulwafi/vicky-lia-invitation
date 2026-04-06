<template>
  <section id="rsvp" class="section-padding relative z-10">
    <div class="max-w-xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <p class="font-sans text-primary-300 tracking-[0.4em] text-xs uppercase mb-4">Konfirmasi Slot</p>
        <h2 class="font-serif text-5xl md:text-6xl font-light text-gradient">List Kehadiran</h2>
        <div class="divider-elegant mt-6">
          <span class="text-gold/70 text-lg">✦</span>
        </div>
        <p class="font-sans text-white/60 text-sm mt-6 leading-relaxed">
          Wajib konfirmasi kehadiran untuk memastikan slot kamu.<br>
          <strong class="text-primary-300">Jangan sampai ketinggalan!</strong>
        </p>
      </div>

      <!-- Form -->
      <div class="glass-blue rounded-3xl p-8 md:p-10" style="box-shadow: 0 8px 60px rgba(30, 58, 138, 0.4);">
        <Transition name="slide-up" mode="out-in">
          <!-- Success state -->
          <div v-if="submitted" class="text-center py-8">
            <div class="w-20 h-20 mx-auto mb-6 rounded-full glass-blue flex items-center justify-center glow-blue">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="font-serif text-3xl text-gradient mb-3">Siap, noted!</h3>
            <p class="font-sans text-white/70 text-sm leading-relaxed">
              Slot kamu sudah tercatat. Inget ya — dateng tepat waktu dan stay sampai selesai. See you! 💙
            </p>
            <button @click="resetForm" class="mt-6 font-sans text-primary-400 text-sm hover:text-white transition-colors underline underline-offset-4">
              Kirim lagi
            </button>
          </div>

          <!-- Form state -->
          <form v-else @submit.prevent="submitForm" class="space-y-6">
            <!-- Name -->
            <div>
              <label class="block font-sans text-white/70 text-xs tracking-widest uppercase mb-2">Nama Lengkap *</label>
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="Nama Anda"
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-sans text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary-500/60 transition-colors"
              />
            </div>

            <!-- Attendance -->
            <div>
              <label class="block font-sans text-white/70 text-xs tracking-widest uppercase mb-3">Kehadiran *</label>
              <div class="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  @click="form.attending = 'yes'"
                  :class="[
                    'py-3 rounded-xl font-sans text-sm font-medium transition-all duration-300',
                    form.attending === 'yes'
                      ? 'bg-primary-600 text-white border border-primary-400'
                      : 'bg-white/5 text-white/60 border border-white/10 hover:border-primary-500/40'
                  ]"
                >
                  ✓ Hadir
                </button>
                <button
                  type="button"
                  @click="form.attending = 'no'"
                  :class="[
                    'py-3 rounded-xl font-sans text-sm font-medium transition-all duration-300',
                    form.attending === 'no'
                      ? 'bg-red-900/60 text-red-300 border border-red-500/40'
                      : 'bg-white/5 text-white/60 border border-white/10 hover:border-red-500/40'
                  ]"
                >
                  ✗ Tidak Hadir
                </button>
              </div>
            </div>

            <!-- Number of guests (only if attending) -->
            <Transition name="fade">
              <div v-if="form.attending === 'yes'">
                <label class="block font-sans text-white/70 text-xs tracking-widest uppercase mb-2">Jumlah Tamu</label>
                <select
                  v-model="form.guests"
                  class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-sans text-white text-sm focus:outline-none focus:border-primary-500/60 transition-colors appearance-none cursor-pointer"
                >
                  <option value="1" class="bg-navy">1 orang</option>
                  <option value="2" class="bg-navy">2 orang</option>
                  <option value="3" class="bg-navy">3 orang</option>
                  <option value="4" class="bg-navy">4 orang</option>
                  <option value="5+" class="bg-navy">5+ orang</option>
                </select>
              </div>
            </Transition>

            <!-- Message -->
            <div>
              <label class="block font-sans text-white/70 text-xs tracking-widest uppercase mb-2">Ucapan & Doa</label>
              <textarea
                v-model="form.message"
                rows="3"
                placeholder="Sampaikan doa dan ucapan terbaik Anda..."
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-sans text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary-500/60 transition-colors resize-none"
              ></textarea>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="!form.name || !form.attending || loading"
              class="w-full btn-primary text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span v-if="loading" class="flex items-center justify-center gap-2">
                <svg class="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 12 0 12 0v4z"></path>
                </svg>
                Mengirim...
              </span>
              <span v-else>Kirim Konfirmasi</span>
            </button>
          </form>
        </Transition>
      </div>

      <!-- Guest messages display -->
      <div v-if="messages.length > 0" class="mt-8 space-y-4">
        <h3 class="font-serif text-2xl text-center text-gradient mb-6">Ucapan Tamu</h3>
        <div
          v-for="(msg, i) in messages"
          :key="i"
          class="glass-blue rounded-2xl p-5"
        >
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full glass-blue flex-shrink-0 flex items-center justify-center text-primary-300 font-serif text-sm">
              {{ msg.name.charAt(0).toUpperCase() }}
            </div>
            <div>
              <p class="font-sans text-white font-medium text-sm">{{ msg.name }}</p>
              <p class="font-sans text-white/60 text-sm mt-1 leading-relaxed">{{ msg.message }}</p>
              <p class="font-sans text-primary-400/60 text-xs mt-2">{{ msg.attending === 'yes' ? '✓ Hadir' : '✗ Tidak Hadir' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  attending: '',
  guests: '2',
  message: '',
})

const loading = ref(false)
const submitted = ref(false)
const messages = ref([])

async function submitForm() {
  loading.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1200))

  if (form.message) {
    messages.value.unshift({
      name: form.name,
      attending: form.attending,
      message: form.message,
    })
  }

  loading.value = false
  submitted.value = true
}

function resetForm() {
  form.name = ''
  form.attending = ''
  form.guests = '2'
  form.message = ''
  submitted.value = false
}
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.4s ease;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
