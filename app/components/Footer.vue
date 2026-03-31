<template>
  <footer class="bg-black">
    <div class="py-14 text-center">
      <h2 class="text-3xl text-sand-600 font-extrabold">
        EXPLORE <span class="text-white">SYRIA</span>
      </h2>
      <div class="flex flex-col md:flex-row justify-center mt-6 gap-12 space-x-1 flex-wrap md:space-x-4 text-white">
        <nuxt-link to="#">About</nuxt-link>
        <nuxt-link to="#">Contact</nuxt-link>
        <nuxt-link to="#">Privacy Policy</nuxt-link>
        <nuxt-link to="#">Terms of Service</nuxt-link>
      </div>
      <p class="text-gray-400 mt-6">Follow us on social media!</p>
      <div class="flex justify-center mt-4 gap-6">
        <a
          href="#"
          class="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <Icon name="formkit:facebook" />
        </a>
        <a
          href="#"
          class="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <Icon name="formkit:twitter" class="text-gray-400 hover:text-white transition-colors duration-300" />
        </a>
        <a
          href="#"
          class="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <Icon name="formkit:instagram" />
        </a>
        <a
          href="#"
          class="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <Icon name="formkit:linkedin" />
        </a>
      </div>
    </div>
    <div class="bg-marine-950 text-center py-2">
      <p class="text-gray-400">&copy; 2024 Explore Syria. All rights reserved.</p>
    </div>
  </footer>
</template>
