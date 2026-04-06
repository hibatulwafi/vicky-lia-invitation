<template>
  <section id="event" class="section-padding relative z-10">
    <div class="max-w-3xl mx-auto">
      <!-- Section header -->
      <div class="text-center mb-16">
        <p class="font-sans text-primary-300 tracking-[0.4em] text-xs uppercase mb-4">Detail Acara</p>
        <h2 class="font-serif text-5xl md:text-6xl font-light text-gradient">Wedding Dinner</h2>
        <p class="font-serif italic text-white/50 text-lg mt-2">&amp; Hangout</p>
        <div class="divider-elegant mt-6">
          <span class="text-gold/70 text-lg">✦</span>
        </div>
      </div>

      <!-- Main event card -->
      <div
        class="glass-blue rounded-3xl p-8 md:p-12 text-center mb-8"
        style="box-shadow: 0 8px 60px rgba(30, 58, 138, 0.4);"
      >
        <!-- Location -->
        <div class="mb-8">
          <div class="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center glow-blue">
            <span class="text-2xl">📍</span>
          </div>
          <p class="font-sans text-primary-300 tracking-[0.3em] text-xs uppercase mb-2">Lokasi</p>
          <h3 class="font-serif text-4xl text-white font-light">Secret Garden</h3>
        </div>

        <div class="w-full h-px mb-8" style="background: linear-gradient(90deg, transparent, rgba(147,197,253,0.3), transparent);"></div>

        <!-- Time & Date row -->
        <div class="grid grid-cols-2 gap-6 mb-8">
          <div>
            <div class="w-12 h-12 mx-auto mb-3 rounded-full glass flex items-center justify-center">
              <span class="text-xl">🕔</span>
            </div>
            <p class="font-sans text-primary-300 tracking-widest text-xs uppercase mb-1">Waktu</p>
            <p class="font-serif text-2xl text-white font-light">17.00 – 19.00</p>
            <p class="font-sans text-white/40 text-xs mt-1">WIB</p>
          </div>
          <div>
            <div class="w-12 h-12 mx-auto mb-3 rounded-full glass flex items-center justify-center">
              <span class="text-xl">👕</span>
            </div>
            <p class="font-sans text-primary-300 tracking-widest text-xs uppercase mb-1">Dress Code</p>
            <p class="font-serif text-2xl text-white font-light">Navy</p>
            <p class="font-sans text-white/40 text-xs mt-1">Wear your best Navy outfit!</p>
          </div>
        </div>

        <div class="w-full h-px mb-8" style="background: linear-gradient(90deg, transparent, rgba(147,197,253,0.3), transparent);"></div>

        <!-- Notes -->
        <div class="text-left space-y-4">
          <p class="font-sans text-primary-300 tracking-[0.3em] text-xs uppercase text-center mb-4">Catatan Penting</p>
          <div class="flex items-start gap-3">
            <span class="text-primary-400 mt-0.5 flex-shrink-0">⏱</span>
            <p class="font-sans text-white/70 text-sm leading-relaxed">
              Karena durasinya singkat, dimohon hadir <strong class="text-white">tepat waktu</strong> dan
              <strong class="text-white">stay sampai acara selesai</strong> ya.
            </p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-primary-400 mt-0.5 flex-shrink-0">📋</span>
            <p class="font-sans text-white/70 text-sm leading-relaxed">
              <strong class="text-white">Wajib list kehadiran sekarang juga</strong> buat konfirmasi slot!
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
