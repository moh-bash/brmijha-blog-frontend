<script setup lang="js">
defineProps({
  Times: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="relative w-full">
    <div
      class="absolute right-1/2 translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-sand-500/0 via-sand-500/50 to-sand-500/0 hidden md:block"
    ></div>
    <div class="space-y-12">
      <div
        v-for="(time, index) in Times"
        :key="time.id"
        class="relative w-full flex flex-col md:flex-row items-center"
        :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
      >
        <div
          class="w-full md:w-1/2 flex px-4 md:px-12"
          :class="index % 2 === 0 ? 'justify-start' : 'justify-end'"
        >
          <div
            class="group relative bg-marine-900/40 backdrop-blur-md border border-white/5 p-6 rounded-3xl transition-all duration-500 hover:border-sand-500/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] w-full max-w-lg"
          >
            <span
              class="inline-block px-4 py-1 rounded-full bg-sand-500 text-marine-950 font-black text-sm mb-4 shadow-lg shadow-sand-500/20"
            >
              {{ time.Year }}
            </span>

            <h3
              class="text-2xl font-bold text-white mb-3 group-hover:text-sand-400 transition-colors"
            >
              {{ time.Title }}
            </h3>

            <p class="text-gray-400 leading-relaxed text-sm md:text-base">
              {{ time.Description }}
            </p>
          </div>
        </div>
        <div
          class="absolute right-1/2 translate-x-1/2 hidden md:flex items-center justify-center z-10"
        >
          <div
            class="w-10 h-10 bg-marine-950 border-[4px] border-sand-500 shadow-[0_0_15px_rgba(212,175,55,0.5)] flex items-center justify-center rounded-full"
          >
            <div class="w-2 h-2 rounded-full bg-sand-500 animate-pulse"></div>
          </div>
        </div>
        <div class="md:w-1/2 hidden md:block"></div>
      </div>
    </div>
  </div>
</template>
