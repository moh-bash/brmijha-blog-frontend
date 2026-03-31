<template>
  <div class="bg-marine-700 mx-auto pt-14 h-screen grid grid-cols-4">
    <div class="relative col-span-4 lg:col-span-3">
      <h2 class="text-white text-2xl mb-2 font-buld font-alexandria mt-2 mx-2">
        Chart your path Through
        <!-- control map -->
        <div class="absolute bottom-2 right-2 flex flex-col gap-2 text-sand-500 font-bold">
         <div class="w-12 h-12 bg-marine-500/70 backdrop-blur-md rounded-lg cursor-pointer flex items-center justify-center hover:bg-marine-600">
            <icon name="formkit:add" />
         </div>
         <div class="w-12 h-12 bg-marine-500/70 backdrop-blur-md rounded-lg cursor-pointer flex items-center justify-center hover:bg-marine-600">
            <icon name="mdi-light:minus-circle" />
         </div>
         <div class="w-12 h-12 bg-marine-500/70 backdrop-blur-md rounded-lg cursor-pointer flex items-center justify-center hover:bg-marine-600">
            <icon name="ic:baseline-gps-fixed" />
         </div>
        </div>

        <!-- sections map -->
        <div class="bg-marine-500/70 backdrop-blur-md h-14 p-2 rounded-xl absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-row gap-2 text-white">
         <div class="bg-sand-600 rounded-lg cursor-pointer p-2 flex items-center justify-center text-marine-800 hover:text-sand-500 hover:bg-marine-600">
            <icon class="me-1" name="fluent-emoji-high-contrast:mountain-railway" /><span class="text-sm">HISTORY</span>
         </div>
         <div class="rounded-lg cursor-pointer flex items-center justify-center hover:bg-marine-600 p-2">
            <icon name="material-symbols:nature-rounded" /><span class="text-sm">NATURE</span>
         </div>
         <div class="rounded-lg cursor-pointer flex items-center justify-center hover:bg-marine-600 p-2">
            <icon name="fluent:food-28-filled" /><span class="text-sm">FOOD</span>
         </div>
        </div>
      </h2>
    </div>
    <div class="col-span-4 lg:col-span-1 bg-marine-800 px-2">
      <h2 class="text-white text-2xl mb-2 font-buld font-alexandria py-2 px-1">
        Curated Journeys
      </h2>
      <div v-if="pending">loding....</div>
      <div v-else-if="error">error</div>
      <div v-else class="overflow-y-auto h-[80vh]">
        <div class="flex flex-col gap-3">
          <ArticleCard :datas="articles.data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
const config = useRuntimeConfig();

const {
  data: articles,
  pending,
  error,
} = await useFetch(`${config.public.apiBase}/articles?populate=*`);
</script>
