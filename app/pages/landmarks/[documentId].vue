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
console.log("landmark", landmark);

const renderMarkdown = (text) => md.render(text);
</script>
<template>
  <header class="relative h-screen w-full overflow-hidden bg-marine-950">
    <NuxtImg
      :src="landmark.Gallery[0]?.url"
      class="absolute top-14 inset-0 w-full h-3/5 md:h-full object-cover opacity-60"
      alt="Food"
    />
    <div
      class="absolute top-14 inset-0 h-3/5 md:h-full bg-gradient-to-t from-20% from-marine-950/95 to-50% to-transparent flex items-center justify-center md:items-start md:pt-44"
    >
      <h1
        class="text-white text-7xl font-bold z-30 pb-20n font-alexandria text-center"
      >
        {{ landmark.Title }}
      </h1>
    </div>

    <div
      class="relative z-20 flex flex-col h-full items-center justify-end px-5 text-white"
    >
      <div
        class="px-6 md:px-10 py-5 bg-sand-600/20 backdrop-blur-sm rounded-3xl mb-12 md:mb-20 border-sand-600 border-2 flex justify-between items-center gap-10 md:gap-16 flex-wrap"
      >
        <div class="flex flex-col items-center justify-around">
          <p>Founded</p>
          <p class="font-bold text-2xl mt-2">
            {{ landmark.QuickFacts.Founded }}
          </p>
        </div>
        <div class="flex flex-col items-center justify-around">
          <p>Category</p>
          <p class="font-bold text-2xl mt-2">
            {{ landmark.category.name }}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <p>status</p>
          <p class="font-bold text-2xl mt-2">
            {{ landmark.QuickFacts.statu }}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <p>Location</p>
          <p class="font-bold text-2xl mt-2">
            {{ landmark.QuickFacts.Location }}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <p>Architecture</p>
          <p class="font-bold text-2xl mt-2">
            {{ landmark.QuickFacts.Architecture }}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <p>sizes</p>
          <p class="font-bold text-2xl mt-2">145 km²</p>
        </div>
      </div>
    </div>
  </header>
  <article
    class="prose bg-marine-950 prose-invert text-gray-200 text-xl leading-relaxed font-cairo"
  >
    <div class="max-w-4xl mx-auto">
      <p class="text-center">
        <span class="text-sand-500 m-0 font-bold text-3xl">{{
          landmark.Description.charAt(0)
        }}</span>
        {{ landmark.Description.slice(1) }}
      </p>

      <!-- Timeline -->
      <div class="relative py-16 bg-marine950 max-w-7xl mx-auto px-4">
        <!-- title -->
        <div class="text-center mb-10">
          <h2 class="text-4xl font-bold text-sand-500">Timeline</h2>
          <div class="h-1 w-24 bg-sand-500 mx-auto rounded-full"></div>
        </div>
        <!-- container -->
        <TimeLine :Times="landmark.Timeline" />
      </div>
    </div>
  </article>
  <Footer />
</template>

<style>
.prose a {
  @apply text-sand-400 no-underline border-b border-sand-400/30 hover:border-sand-400 transition-all font-bold;
}
.prose h2 {
  @apply text-3xl font-bold text-sand-500 mt-12 mb-6 font-alexandria;
}
</style>
