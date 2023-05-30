<script setup lang="ts">
</script>

<template>
  <div class="h-screen flex flex-col font-sans">
    <navbar class="h-auto py-5 bg-[#311F28]">
    <div class="py-3 max-w-screen-lg container mx-auto flex items-center justify-between">
        <router-link to="/">
          <img src="./assets/dbcs.webp" alt="Dynamic Business Consulting Stockholm" />
        </router-link>
        <ul class="flex-col md:flex-row flex md:items-center text-center md:w-60 uppercase text-[#6D9EEB]">
          <li class="w-30 h-8 hover:border-b-4 hover:text-[#93C37B]"><router-link to="/about">About</router-link></li>
          <li class="w-30 h-8 hover:border-b-4 hover:text-[#93C37B]"><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </navbar>
    <main class="grow bg-[#241F31]">
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    <footer class="h-10 text-center md:text-left h-40 flex items-center bg-[#1B273B]">
      <p class="container mx-auto max-w-screen-lg prose prose-primary text-sm">
        © 2022 Dynamic Business Consulting Stockholm AB
      </p>
    </footer>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>