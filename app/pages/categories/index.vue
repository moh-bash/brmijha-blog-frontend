<template>
  <div class="bg-marine-100 dark:bg-marine-700">
    <div class="max-w-7xl mx-auto px-4 py-12 pt-16">
      <div
        class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-screen md:h-[600px]"
      >
        <div
          class="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-marine-900 border border-white/10"
        >
          <img
            src="https://media.gettyimages.com/id/590590243/photo/roman-theatre-of-palmyra-syria.jpg?s=612x612&w=0&k=20&c=DJZ-JVJYmm2a89arbG8ORPpwEPjh9-QqZtpc4OaGKMA="
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-100"
            alt="History"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-marine-950/70 via-transparent to-transparent"
          ></div>
          <div class="absolute bottom-0 p-8">
            <h3 class="text-3xl font-bold text-white mb-2">History and Castles</h3>
            <p class="text-sand-300 text-sm max-w-xs">
              Discover the rich history of Syria through its ancient castles and archaeological sites, each telling a unique story of the past.
            </p>
          </div>
        </div>

        <div
          class="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-3xl bg-marine-900 border border-white/10"
        >
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1374&auto=format&fit=crop"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-95"
            alt="Nature"
          />
          <div
            class="absolute inset-0 bg-gradient-to-l from-marine-950/40 to-transparent"
          ></div>
          <div
            class="absolute inset-0 flex flex-col justify-center items-end p-8 text-right"
          >
            <h3 class="text-2xl font-bold text-white">Nature and Mountains</h3>
            <p class="text-sand-400 text-xs mt-2">
              Aabsolutely breathtaking landscapes and majestic mountains await you in Syria.
            </p>
          </div>
        </div>

        <div
          class="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl bg-marine-900 border border-white/10"
        >
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-100"
            alt="Food"
          />
          <div class="absolute inset-0 bg-marine-900/30"></div>
          <div class="absolute inset-0 flex flex-col justify-end p-6">
            <h3 class="text-xl font-bold text-white">Food</h3>
            <div
              class="w-8 h-[2px] bg-sand-500 mt-2 transition-all duration-500 group-hover:w-full"
            ></div>
          </div>
        </div>

        <div
          class="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl bg-marine-900 border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
        >
          <div
            class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"
          ></div>
          <div
            class="absolute inset-0 flex flex-col justify-center items-center p-4 text-center"
          >
            <div
              class="mb-3 p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-green-500/50 transition-colors"
            >
              <svg
                class="w-6 h-6 text-sand-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-white">Street Markets</h3>
            <p
              class="text-white/40 text-[10px] uppercase tracking-tighter mt-1"
            >
              Authentic Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="py-20 bg-marine-950">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-sand-400 mb-4 font-alexandria">More Explore</h2>
      <p class="text-white  text-sm max-w-md mx-auto">
        Explore more articles about Syrian culture, history, and travel tips to make your visit unforgettable.
      </p>
    </div>
    <div class="container mx-auto px-4 mt-10">
      <div
        v-if="pending"
        class="text-center mt-10 text-gray-500 col-span-full"
      >
        loding...
      </div>
      <div v-else-if="error">error {{ error.message }}</div>
      <div v-else class="grid grid-cols-2 md:grid-cols-4  gap-4">
       <CgCard :articles="articles.data" />
      </div>
    </div>
  </div>
</template>
<script setup lang="js">
const config = useRuntimeConfig()

const { data: articles, pending, error } = await useFetch(
`${config.public.apiBase}/articles?populate=*`
)
</script>
<style scoped>
.group:hover {
  box-shadow: 0 0 30px -10px rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.3);
}
</style>
