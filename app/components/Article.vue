<template>
  <div class="bg-marine-900 min-h-screen">
    <div class="container mx-auto py-16 px-3">
      <h1 class="text-3xl font-bold mb-4 text-white">Curated <span class="text-sand-500">Journeys</span></h1>
      <div v-if="pending" class="text-gray-400 mt-10">loding....</div>
      <div v-else-if="error" class="text-gray-400 mt-10">
        No articles found.
      </div>
      <div
        v-else="articles?.data?.length"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10"
      >
        <ArticleCard :datas="articles" />
      </div>
    </div>
  </div>
</template>
<script setup lang="js">
defineProps({
  articles: {
    type: Object,
    required: true,
  },
  pending: {
    type: Boolean,
    required: true,
  },
  error: {
    type: Object,
    required: true,
  },
});
</script>
