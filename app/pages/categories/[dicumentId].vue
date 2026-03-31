<script setup lang="js">
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
const route = useRoute();
const config = useRuntimeConfig();

const {
  data: response,
  error,
  pending,
} = await useFetch(
  `${config.public.apiBase}/landmarks/${route.params.documentId}?populate=*`,
  
);
const landmark = response.value?.data;

const renderMarkdown = (text) => md.render(text);
</script>
<template>
  <header class="relative h-screen w-full overflow-hidden bg-marine-950 ">
    
     <NuxtImg
      src="https://media.gettyimages.com/id/557801997/photo/palmyra-tetrapylone-syria.jpg?s=612x612&w=0&k=20&c=lnO6zyVfjDq8JefltdFemnQeovtZUbkfw5hlKbT8UsQ="
      class="absolute top-14 inset-0 w-full h-3/5 md:h-full object-cover opacity-50"
      alt="Food"
    />
    <div
      class="absolute top-14 inset-0 h-3/5 md:h-full bg-gradient-to-t from-20% from-marine-950/80 to-50% to-transparent flex items-center justify-center md:items-start md:pt-44"
    >
  
    <h1 class="text-white text-7xl font-bold font-alexandria z-30 pb-20">Aleppo</h1>
  </div>

    <div class="relative z-20 flex flex-col h-full items-center justify-end px-4 text-white">
       <div class="p-6 bg-sand-600/40 backdrop-blur-md rounded-lg mb-20 border-sand-600 border-2 flex justify-between items-center gap-10 flex-wrap">
        <div class="flex flex-col items-center">
          <p>sizes</p>
          <p>145000 km²</p>
        </div>
        <div class="flex flex-col items-center">
          <p>sizes</p>
          <p>145000 km²</p>
        </div>
        <div class="flex flex-col items-center">
          <p>sizes</p>
          <p>145000 km²</p>
        </div>
        <div class="flex flex-col items-center">
          <p>sizes</p>
          <p>145000 km²</p>
        </div>
        <div class="flex flex-col items-center">
          <p>sizes</p>
          <p>145000 km²</p>
        </div>
        <div class="flex flex-col items-center">
          <p>sizes</p>
          <p>145000 km²</p>
        </div>
       </div>
       
    </div>
  </header>
</template>

<style>
.prose a {
  @apply text-sand-400 no-underline border-b border-sand-400/30 hover:border-sand-400 transition-all font-bold;
}
.prose h2 {
  @apply text-3xl font-bold text-sand-500 mt-12 mb-6 font-alexandria;
}
</style>