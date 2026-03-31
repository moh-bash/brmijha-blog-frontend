<template>
  <div class="min-h-screen bg-marine-950 text-white pt-24 pb-20 px-6 md:px-12">
    <section class="max-w-7xl mx-auto mb-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span class="text-green-400 font-mono tracking-[0.4em] text-xs uppercase mb-4 block">
            // Mission_Identity_v1
          </span>
          <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Redefining the <span class="text-sand-500">Syrian</span> Experience.
          </h1>
          <p class="text-white/60 text-lg leading-relaxed max-w-xl">
            Explore Syria is a digital bridge connecting the world to the heart of the Levant. We combine cutting-edge technology with deep-rooted history to showcase Syria like never before.
          </p>
        </div>
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-sand-500 to-green-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div class="relative bg-marine-900 rounded-3xl overflow-hidden border border-white/10 aspect-video">
             <img src="https://images.unsplash.com/photo-1549110495-26372c084931?q=80&w=1471&auto=format&fit=crop" class="w-full h-full object-cover opacity-80" alt="Syrian Landscape" />
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto mb-32 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div v-for="stat in stats" :key="stat.label" class="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-sand-500/30 transition-all">
        <p class="text-4xl font-bold text-sand-500 mb-2">{{ stat.value }}</p>
        <p class="text-xs font-mono text-white/40 uppercase tracking-widest">{{ stat.label }}</p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto mb-32">
      <h2 class="text-3xl font-bold mb-12 flex items-center gap-4">
        <span class="w-12 h-[1px] bg-green-500"></span>
        Core Philosophy
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="md:col-span-2 p-10 rounded-3xl bg-marine-900 border border-white/10 relative overflow-hidden">
          <h3 class="text-2xl font-bold mb-4 relative z-10">Authenticity Through Technology</h3>
          <p class="text-white/60 relative z-10">We don't just show pictures; we provide interactive data, historical context, and real-time updates to ensure your exploration is as authentic as being there in person.</p>
          <div class="absolute -right-10 -bottom-10 text-9xl font-bold text-white/[0.02] select-none">DATA</div>
        </div>
        <div class="p-10 rounded-3xl bg-sand-500 text-marine-950">
          <h3 class="text-2xl font-bold mb-4">Community Driven</h3>
          <p class="font-medium">Built by locals and travelers who share a passion for Syria's hidden gems and vibrant culture.</p>
        </div>
      </div>
    </section>
  </div>
  <Footer/>
</template>

<script setup>
const stats = [
  { value: '14', label: 'Governorates' },
  { value: '250+', label: 'Landmarks' },
  { value: '1.2k', label: 'Photographs' },
  { value: '24/7', label: 'Digital Access' }
]
</script>

<style scoped>
/* Custom animations or gradients if needed */
</style>