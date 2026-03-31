<template>
  <div
    v-for="data in datas"
    :key="data.id"
    class="w-full bg-marine-950 flex-col items-start mx-auto"
  >
    <!-- content card -->
    <NuxtImg
      :src="data.cover?.url"
      alt="Your Company"
      class="h-52 w-full object-cover rounded-t"
    />
    <div class="p-4 text-start">
      <h2 class="text-xl font-bold text-white line-clamp-1">
        {{ data.title }}
      </h2>
      <p class="text-gray-400 mt-2 line-clamp-1 mb-4">
        {{ data.description }}
      </p>
      <NuxtLink
        :to="`/blog/${data.documentId}`"
        class="bg-sand-500 hover:bg-sand-600 text-white font-bold py-2 px-4 rounded"
      >
        Read More
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="js">
defineProps({
  datas: {
    type: Object,
    required: true,
  },
});
</script>
