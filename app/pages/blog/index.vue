<template>
  <div class="w-full h-96 sticky top-0 -z-10 bg-marine-800 flex flex-col items-center justify-center pt-16">
    <h1 class="text-4xl font-bold text-white">Blog</h1>
     <!-- search input -->
      <div
        class="my-12 backdrop-blur-md bg-marine-500/45 dark:bg-marine-950/40 shadow-md shadow-marine-900 dark:shadow-marine-700 rounded-full mx-auto flex items-center justify-between px-6 py-4 min-w-7xl"
      >
        <div class="flex-col text-start w-3/4 ms-1">
          <label class="text-sand-500" for="search">DESTINATION</label>
          <input
            type="text"
            id="search"
            placeholder="Search for a place..."
            class="bg-transparent focus:outline-none text-white w-full"
          />
        </div>
        <div class="flex flex-col text-start w-1/4 me-2">
          <label class="text-sand-500" for="vibe">VIBE</label>
          <select
            id="vibe"
            class="bg-transparent focus:outline-none text-white"
          >
            <option class="bg-sand-500" value="damascus">Damascus</option>
            <option class="bg-sand-500" value="alppo">Alppo</option>
          </select>
        </div>
        <button
          class="bg-sand-500 text-marine-950 font-bold px-6 py-2 rounded-full ms-2"
        >
          Search
        </button>
      </div>
  </div>
  <div>
    <Article :articles="articles.data" :pending="pending" :error="error" />
  </div>
  <Footer />
</template>
<script setup lang="js">
const config = useRuntimeConfig();

const {
  data: articles,
  pending,
  error,
} = await useFetch(`${config.public.apiBase}/articles?populate=*`);
</script>
