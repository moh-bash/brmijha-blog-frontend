<script setup>
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
const route = useRoute();
const config = useRuntimeConfig();

const {
  data: response,
  error,
  pending,
} = await useFetch(
  `${config.public.apiBase}/articles/${route.params.documentId}?populate=*`,
);
const article = response.value?.data;

const renderMarkdown = (text) => md.render(text);
</script>
<template>
  <div v-if="pending" class="flex items-center justify-center h-screen">
    loading...
  </div>
  <div
    v-else-if="error"
    class="flex items-center justify-center h-screen text-red-500"
  >
    Error loading article.
  </div>
  <div v-else class="bg-marine-900">
    <div class="container mx-auto py-16 px-6">
      <h2
        class="text-5xl font-bold text-sand-500 text-center font-alexandria leading-tight max-w-4xl mx-auto"
      >
        {{ article.title }}
      </h2>
      <div
        class="flex items-center justify-between max-w-72 mx-auto my-5 text-gray-100 text-xs"
      >
        <p>
          <Icon name="material-symbols:person-2" class="me-1" />
          {{ article.author.name }}
        </p>
        <p>
          <Icon name="eos-icons:subscriptions-created" class="me-1" />
          {{ article.createdAt.split("T")[0] }}
        </p>
        <p>
          <Icon name="bx:bxs-category" class="me-1" />
          {{ article.category.name }}
        </p>
      </div>
      <NuxtImg
        :src="article.cover.url"
        class="w-full md:max-w-5xl mx-auto rounded-3xl max-h-[435px] object-cover mb-8 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
        alt="Food"
      />
      <article
        class="prose prose-invert max-w-4xl mx-auto text-gray-200 text-xl leading-relaxed font-cairo"
      >
        <p>
          <span class="text-sand-500 font-bold text-3xl">{{
            article.description.charAt(0)
          }}</span>
          {{ article.description.slice(1) }}
        </p>

        <!-- blocks -->
        <div v-for="block in article.blocks" :key="block.id">
          <!-- text -->
          <div
            v-if="block.__component === 'shared.rich-text'"
            v-html="renderMarkdown(block.body)"
          ></div>
          <!-- media -->
          <div v-else-if="block.__component === 'shared.media'" class="my-8">
            <NuxtImg
              src="https://media.gettyimages.com/id/557801997/photo/palmyra-tetrapylone-syria.jpg?s=612x612&w=0&k=20&c=lnO6zyVfjDq8JefltdFemnQeovtZUbkfw5hlKbT8UsQ="
              class="w-full md:max-w-3xl mx-auto rounded-3xl object-cover shadow-[0_0_20px_rgba(0,0,0,0.3)] opacity-100"
              :alt="block.id"
            />
          </div>
          <!-- quote -->
          <blockquote
            v-else-if="block.__component === 'shared.quote'"
            class="border-l-4 border-sand-500 pl-6 italic text-gray-400 my-5 bg-marine-950 py-3 rounded-xl"
          >
            <p class="text-sand-500">{{ block.title }}</p>
            <p>{{ block.body }}</p>
          </blockquote>
          <!-- slider -->
          <div v-else-if="block.__component === 'shared.slider'" class="my-8">
            <div class="flex overflow-x-auto space-x-4 py-2">
              <NuxtImg
                src="https://media.gettyimages.com/id/2208564424/photo/homs-syria-a-view-of-the-ruins-of-palmyra-ancient-city-as-it-still-carries-the-traces-of-war.jpg?s=612x612&w=0&k=20&c=z447sG1Sap6Kpi7xTTgYWqCbajz6Ltf8W3JR5aODKY8="
                class="w-full md:max-w-3xl h-auto mx-auto rounded-3xl object-cover shadow-[0_0_20px_rgba(0,0,0,0.3)] opacity-100"
                :alt="block.id"
              />
            </div>
          </div>
        </div>
      </article>
      <div>
        <h3 class="text-2xl font-bold text-sand-500 mt-12 mb-6 font-alexandria">
          Share this article
        </h3>
        <div class="flex space-x-4">
          <a
            href="#"
            class="text-sand-400 hover:text-sand-500 transition-colors"
          >
            <Icon name="mdi:facebook" class="text-2xl" />
          </a>
          <a
            href="#"
            class="text-sand-400 hover:text-sand-500 transition-colors"
          >
            <Icon name="mdi:twitter" class="text-2xl" />
          </a>
          <a
            href="#"
            class="text-sand-400 hover:text-sand-500 transition-colors"
          >
            <Icon name="mdi:linkedin" class="text-2xl" />
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
.prose a {
  @apply text-sand-400 no-underline border-b border-sand-400/30 hover:border-sand-400 transition-all font-bold;
}
.prose h2 {
  @apply text-3xl font-bold text-sand-500 mt-12 mb-6 font-alexandria;
}
</style>
