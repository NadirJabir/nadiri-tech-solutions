<template>
  <div id="app">
    <Navbar v-if="showLayout" />
    
    <main class="content-wrapper">
      <router-view v-slot="{ Component }">
        <component :is="Component" v-if="Component" />
      </router-view>
    </main>
    
    <Footer v-if="showLayout" />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const authPages = ['/login', '/signup', '/forgot-password'];

// Use a computed property instead of direct $route.path access in template
const showLayout = computed(() => {
  return route && route.path && !authPages.includes(route.path);
});
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0f7fa, #fdffff);
}

.content-wrapper {
  flex: 1 0 auto;
  width: 100%; /* Ensure content spans full width */
}

footer {
  flex-shrink: 0;
}
</style>