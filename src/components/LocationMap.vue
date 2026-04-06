<template>
  <section class="section-padding relative z-10">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <p class="font-sans text-primary-300 tracking-[0.4em] text-xs uppercase mb-4">Lokasi Acara</p>
        <h2 class="font-serif text-5xl md:text-6xl font-light text-gradient">Peta Lokasi</h2>
        <div class="divider-elegant mt-6">
          <span class="text-gold/70 text-lg">✦</span>
        </div>
      </div>

      <!-- Map embed -->
      <div class="glass-blue rounded-3xl overflow-hidden" style="box-shadow: 0 8px 60px rgba(30, 58, 138, 0.4);">
        <div class="relative" style="padding-bottom: 50%;">
          <iframe
            class="absolute inset-0 w-full h-full"
            style="border: 0; filter: hue-rotate(200deg) saturate(0.5) brightness(0.8);"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Secret+Garden+Jl+Surya+Kencana+No+07+Cikole+Sukabumi+Jawa+Barat&output=embed"
          ></iframe>
        </div>

        <!-- Address info -->
        <div class="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p class="font-serif text-xl text-white mb-1">Secret Garden Sukabumi</p>
            <p class="font-sans text-white/60 text-sm">Jl. Surya Kencana No.07, Cikole, Kec. Cikole,<br>Kota Sukabumi, Jawa Barat 43114</p>
          </div>
          <a
            href="https://maps.app.goo.gl/FzypwSEUJdmuMtKg7"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-shrink-0 btn-primary text-white text-center flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Buka Maps
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
