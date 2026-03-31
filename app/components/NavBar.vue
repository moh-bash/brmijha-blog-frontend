<template>
  <nav
    :class="[
      'fixed px-8 transition-[opacity,background-color,padding] z-50 duration-500 ease-in-out',
      isScrolled
        ? 'backdrop-blur-md w-11/12 translate-y-1 rounded-3xl left-1/2 -translate-x-1/2 bg-marine-500/80 dark:bg-marine-950/80 shadow-xl border-sm border-sand-700'
        : navbarClasses,
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
    ]"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-14 items-center justify-between">
        <!-- logo -->
        <nuxt-link to="/" class="flex items-center justify-between">
          <p class="text-sand-500 text-2xl font-bold">Ex</p>
          <p class="text-white text-2xl font-bold ms-1">Syria</p>
        </nuxt-link>

        <!-- Navigation Links -->
        <div class="text-white hidden md:block">
          <ul class="flex space-x-1 md:space-x-7 text-sm md:text-base">
            <li>
              <nuxt-link
                to="/"
                class="text-white hover:bg-gray-700 hover:text-white block px-3 py-1 md:py-2 rounded-md text-sm md:text-base font-medium"
                >Home</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/map"
                class="text-white hover:bg-gray-700 hover:text-white block px-3 py-1 md:py-2 rounded-md text-sm md:text-base font-medium"
                >Map</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/categories"
                class="text-white hover:bg-gray-700 hover:text-white block px-3 py-1 md:py-2 rounded-md text-sm md:text-base font-medium"
                >Categories</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/blog"
                class="text-white hover:bg-gray-700 hover:text-white block px-3 py-1 md:py-2 rounded-md text-sm md:text-base font-medium"
                >Blog</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/tools"
                class="text-white hover:bg-gray-700 hover:text-white block px-3 py-1 md:py-2 rounded-md text-sm md:text-base font-medium"
                >Tools</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/about"
                class="text-white hover:bg-gray-700 hover:text-white block px-3 py-1 md:py-2 rounded-md text-sm md:text-base font-medium"
                >About</nuxt-link
              >
            </li>
          </ul>
        </div>

        <!-- icons -->
        <div class="flex items-center">
          <!-- togl lang -->
          <button
            @click="toggleTheme"
            type="button"
            class="rounded-full hover:text-white focus:outline-none  border-none ring-none transition-colors duration-300 border border-sand-500/20 shadow-sm shadow-sand-500/10 p-2"
          >
            <Icon v-if="isDark" name="material-symbols:sunny" class="text-sand-500 text-xl"/>
            <Icon v-if="!isDark" name="material-symbols:dark-mode" class="text-marine-900 text-xl"/>
          </button>
          <NuxtLink
            to="/login"
            class="bg-sand-500 text-marine-950 font-bold px-6 py-2 rounded-full ms-5 hover:bg-sand-600 transition-colors"
            >Login</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="js">
import { NuxtIconCss } from "@nuxt/icon/runtime/components/css.js";
import { onMounted, onUnmounted, ref , computed} from "vue";
import { useRoute } from "vue-router";

const isDark = ref(false);
const isScrolled = ref(false);
const isVisible = ref(true);
const lastScrollY = ref(0);
const route = useRoute();

const navbarClasses = computed(() => {
  if(route.path === "/"){
    return "w-full bg-transparent"
  }
  
  return "w-full bg-marine-800"
})

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
};

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  isScrolled.value = window.scrollY > 100;

  if (currentScrollY > lastScrollY.value && currentScrollY > 800) {
    isVisible.value = false;
    
  } else {
    isVisible.value = true;
  }
  lastScrollY.value = currentScrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  if (localStorage.theme === "dark") {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  } else {
    isDark.value = false;
    document.documentElement.classList.remove("dark");
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
