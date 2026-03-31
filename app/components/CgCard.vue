<template>
  <div
    v-for="article in articles"
    :key="article.id"
    class="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl bg-marine-900 border border-white/10 h-[400px] shadow-[0_0_20px_rgba(0,0,0,0.3)]"
  >
    <NuxtImg
      :src="article.cover.url"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-100"
      alt="Food"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-20% from-marine-950/80 to-50% to-transparent"
    ></div>
    <div class="absolute inset-0 flex flex-col justify-end p-6">
      <p class="text-sand-400 text-lg font-bold">+32</p>
      <h3 class="text-xl font-bold text-white">{{ article.title }}</h3>
      <p class="text-sand-400 text-sm mt-2 line-clamp-1">
        {{ article.description }}
      </p>
      <div
        class="w-8 h-[2px] bg-sand-500 mt-2 transition-all duration-500 group-hover:w-full"
      ></div>
    </div>
  </div>
</template>
<script setup lang="js">
defineProps({
  articles: {
    type: Object,
    required: true,
  },
});
</script>
