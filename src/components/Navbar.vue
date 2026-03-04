<template>
  <header :class="{ 'header-scrolled': isScrolled }">
    <div class="container header-container">
      <router-link to="/" class="logo" @click="closeMenu">
        Nadiri<span>Tech</span>
      </router-link>

      <div class="menu-toggle" @click="toggleMenu">
        <i :class="isMenuActive ? 'fas fa-times' : 'fas fa-bars'"></i>
      </div>

      <nav :class="{ 'active': isMenuActive }">
        <ul>
          <li><router-link to="/" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/solutions" @click="closeMenu">Solutions</router-link></li>
          <li><router-link to="/case-studies" @click="closeMenu">Case Studies</router-link></li>
          <li><router-link to="/contact" @click="closeMenu" class="nav-btn">Get a Quote</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuActive = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
};

const closeMenu = () => {
  isMenuActive.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: transparent;
  transition: all 0.4s ease;
  padding: 20px 0;
}

.header-scrolled {
  background: #ffffff;
  padding: 12px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  font-size: 1.6rem;
  font-weight: 800;
  color: #2c3e50;
  text-decoration: none;
}

.logo span { color: #3498db; }

nav ul {
  display: flex;
  list-style: none;
  align-items: center;
}

nav ul li { margin-left: 35px; }

nav ul li a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 600;
  transition: color 0.3s;
}

.nav-btn {
  background: #3498db;
  color: white !important;
  padding: 10px 20px;
  border-radius: 5px;
}

/* Mobile Responsive Logic */
@media (max-width: 768px) {
  .menu-toggle { display: block; cursor: pointer; font-size: 1.5rem; }
  
  nav {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    display: none;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);
  }
  
  nav.active { display: flex; }
  
  nav ul { flex-direction: column; }
  
  nav ul li { margin: 15px 0; }
}

/* 1. Add this to your base styles (above the media query) */
.menu-toggle {
  display: none; /* Hide on desktop */
  cursor: pointer;
  font-size: 1.5rem;
  color: #2c3e50;
}

/* 2. Refine your Mobile Responsive Logic */
@media (max-width: 768px) {
  .menu-toggle {
    display: block; /* Show only on mobile */
  }

  nav {
    position: absolute;
    top: 100%;
    left: -100%; /* Start off-screen for a better transition */
    width: 100%;
    background: white;
    transition: 0.3s ease-in-out;
    padding: 20px;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);
    display: block; /* Change from none to block so transition works */
    visibility: hidden;
    opacity: 0;
  }

  nav.active {
    left: 0;
    visibility: visible;
    opacity: 1;
  }

  nav ul {
    flex-direction: column;
    align-items: flex-start;
  }

  nav ul li {
    margin: 15px 0;
    width: 100%;
  }
}
</style>