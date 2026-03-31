<template>
   <div v-if="pending" class="text-center mt-10 text-gray-500">
      Loading articles...
   </div>
   <div v-else-if="error" class="text-center flex flex-col items-center justify-center text-4xl text-sand-500 h-screen bg-marine-600">
      <p>Failed to load articles :</p> 
      <p class="text-red-500 text-2xl mt-4">{{ error.message }}</p>
   </div>
   <div v-else>
      <Header :articles="articles.data" />
      <Mode/>
      <Article :articles="articles.data" :pending="pending" :error="error" />
      <MapHome />
      <Footer />
   </div>
</template>
<script setup lang="js">
const config = useRuntimeConfig()

const { data: articles, pending, error } = await useFetch(
`${config.public.apiBase}/articles?populate=*`
)
</script>
