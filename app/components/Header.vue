<template>
  <div
    class="bg-[linear-gradient(to_top,#0D0D0D_0%,transparent_100%),url('https://media.gettyimages.com/id/149422235/nl/foto/aerial-view-of-syria.jpg?s=612x612&w=0&k=20&c=6ITxXWuMV-pEBx2zLtF4W-5F0EeecHr-TobU0GtJwNc=')] bg-cover mx-auto text-center pb-24 h-screen dark:bg-black flex items-center justify-center px-3"
  >
    <div class="w-full md:w-2/3">
      <h1 class="text-5xl md:text-7xl font-bold text-white pt-16 font-cairo">
        Explore Syria
      </h1>
      <h2 class="text-4xl md:text-7xl font-bold text-sand-500 mt-5 font-kufi">
        تاريخ سوريا حكاية
      </h2>
      <p class="text-gray-400 mt-6">Welcome to syria</p>

      <!-- search input -->
      <div
        class="my-20 backdrop-blur-md bg-marine-500/45 dark:bg-marine-950/40 shadow-md shadow-marine-900 dark:shadow-marine-700 rounded-full mx-auto flex items-center justify-between px-6 py-4 min-w-full"
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
