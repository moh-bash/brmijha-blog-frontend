<template>
  <div class="min-h-screen bg-marine-950 pt-24 pb-12 px-4 md:px-8">
    <header class="max-w-7xl mx-auto mb-16 text-center">
      <span class="text-green-400 font-mono tracking-[0.3em] text-xs uppercase mb-4 block">
        // Digital_Utility_Belt_v1.0
      </span>
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
        Traveler's <span class="text-sand-500">Toolkit</span>
      </h1>
      <p class="text-white/60 max-w-2xl mx-auto text-lg">
        Essential digital tools to help you navigate, communicate, and plan your journey through Syria seamlessly.
      </p>
    </header>

    <main class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <section class="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-all duration-500">
        <div class="flex justify-between items-start mb-8">
          <div class="p-3 bg-green-500/10 rounded-xl">
            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <span class="text-[10px] font-mono text-white/20 uppercase tracking-widest">Live Rates</span>
        </div>
        <h2 class="text-2xl font-bold text-white mb-4">Currency Converter</h2>
        <div class="space-y-4">
          <div class="relative">
            <input type="number" placeholder="USD Amount" class="w-full bg-marine-900 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition-colors">
            <span class="absolute right-4 top-3.5 text-xs text-white/40 uppercase">USD</span>
          </div>
          <div class="flex justify-center py-2">
            <svg class="w-5 h-5 text-sand-500 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
          </div>
          <div class="relative">
            <div class="w-full bg-marine-800/50 border border-white/5 rounded-xl px-4 py-3 text-green-400 font-bold">
              0.00 <span class="text-xs text-white/40 font-normal ml-2 uppercase">SYP</span>
            </div>
          </div>
        </div>
      </section>

      <section class="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500">
        <div class="flex justify-between items-start mb-8">
          <div class="p-3 bg-blue-500/10 rounded-xl">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
          </div>
          <div class="flex space-x-2">
            <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span class="text-[10px] font-mono text-white/20 uppercase tracking-widest">Damascus</span>
          </div>
        </div>
        <h2 class="text-2xl font-bold text-white mb-4">Weather Radar</h2>
        <div class="flex items-center justify-between">
          <div>
            <span class="text-5xl font-bold text-white">24°</span>
            <p class="text-white/40 text-sm mt-1">Sunny / Clear Sky</p>
          </div>
          <div class="text-right">
            <p class="text-xs text-blue-400 font-mono">H: 28° L: 14°</p>
            <p class="text-xs text-white/20 mt-1 uppercase">Wind: 12km/h</p>
          </div>
        </div>
      </section>

      <section class="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-sand-500/30 transition-all duration-500 lg:col-span-1">
        <div class="flex justify-between items-start mb-8">
          <div class="p-3 bg-sand-500/10 rounded-xl">
            <svg class="w-6 h-6 text-sand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
          </div>
          <span class="text-[10px] font-mono text-white/20 uppercase tracking-widest">Arabic Dialect</span>
        </div>
        <h2 class="text-2xl font-bold text-white mb-4">Phrasebook</h2>
        <ul class="space-y-4">
          <li class="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group/item">
            <div>
              <p class="text-white text-sm font-medium">Hello (Marhaba)</p>
              <p class="text-white/40 text-[10px]">مرحباً</p>
            </div>
            <svg class="w-4 h-4 text-white/20 group-hover/item:text-sand-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
          </li>
          <li class="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group/item">
            <div>
              <p class="text-white text-sm font-medium">How much is this?</p>
              <p class="text-white/40 text-[10px]">بقديش هاد؟</p>
            </div>
            <svg class="w-4 h-4 text-white/20 group-hover/item:text-sand-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
          </li>
        </ul>
      </section>

      <section class="group p-8 rounded-3xl bg-marine-900/50 border border-white/10 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="flex-1">
          <h2 class="text-2xl font-bold text-white mb-2">Emergency Quick-Call</h2>
          <p class="text-white/40 text-sm">One-tap access to local authorities and emergency services within Syria.</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:w-auto">
          <button class="flex flex-col items-center justify-center p-4 rounded-2xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-all group">
            <span class="text-red-500 font-bold text-xl">110</span>
            <span class="text-[10px] text-white/60 uppercase mt-1">Ambulance</span>
          </button>
          <button class="flex flex-col items-center justify-center p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-all group">
            <span class="text-blue-500 font-bold text-xl">112</span>
            <span class="text-[10px] text-white/60 uppercase mt-1">Police</span>
          </button>
          <button class="flex flex-col items-center justify-center p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 transition-all group col-span-2 sm:col-span-1">
            <span class="text-orange-500 font-bold text-xl">113</span>
            <span class="text-[10px] text-white/60 uppercase mt-1">Fire Dept</span>
          </button>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
// Future logic for API calls (Currency & Weather) can be added here
</script>

<style scoped>
/* Glassmorphism subtle noise effect */
main section {
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
</style>