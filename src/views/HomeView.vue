<script setup>
import { ref, onMounted } from 'vue';

const coreServices = [
  { id: 1, title: 'Custom Software', icon: 'fas fa-laptop-code', desc: 'Precision-engineered applications designed to scale with your business growth.' },
  { id: 2, title: 'Cloud Integration', icon: 'fas fa-cloud-upload-alt', desc: 'Seamless cloud migration and infrastructure management for modern enterprises.' },
  { id: 3, title: 'UX/UI Strategy', icon: 'fas fa-drafting-pencil', desc: 'User-centric designs that convert visitors into loyal, long-term customers.' }
];

const isVisible = ref(false);
onMounted(() => { isVisible.value = true; });
</script>

<template>
  <div class="home">
    <section class="hero-light">
      <div class="container">
        <div class="hero-content" :class="{ 'reveal': isVisible }">
          <span class="badge">Next-Gen Technology</span>
          <h1>We Build the <span>Digital Backbone</span> of Modern Business</h1>
          <p>NadiriTech Solutions delivers premium software engineering and consulting to help you stay ahead in a competitive market.</p>
          <div class="hero-btns">
            <router-link to="/solutions" class="btn btn-primary">View Solutions</router-link>
            <router-link to="/contact" class="btn btn-secondary">Get Started</router-link>
          </div>
        </div>
      </div>
      <div class="light-blob"></div>
    </section>

    <div class="trust-bar">
      <div class="container">
        <p class="trust-title">POWERING SOLUTIONS WITH</p>
        <div class="logo-flex">
          <i class="fab fa-vuejs" title="Vue.js"></i>
          <i class="fab fa-aws" title="AWS"></i>
          <i class="fab fa-node-js" title="Node.js"></i>
          <i class="fab fa-docker" title="Docker"></i>
          <i class="fab fa-python" title="Python"></i>
        </div>
      </div>
    </div>

    <section class="section-padding bg-white">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Expertise You Can Trust</h2>
          <div class="title-line"></div>
          <p class="section-subtitle">We combine technical excellence with business strategy to deliver results.</p>
        </div>
        
        <div class="services-grid">
          <div v-for="service in coreServices" :key="service.id" class="service-card-light">
            <div class="icon-box"><i :class="service.icon"></i></div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-light">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-box">
            <span class="num">50+</span>
            <span class="txt">Projects Delivered</span>
          </div>
          <div class="stat-box">
            <span class="num">100%</span>
            <span class="txt">Uptime Guaranteed</span>
          </div>
          <div class="stat-box">
            <span class="num">24/7</span>
            <span class="txt">Dedicated Support</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Base container for professional spacing */
.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-light {
  position: relative;
  background: #ffffff;
  padding: 180px 0 120px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.light-blob {
  position: absolute;
  top: -10%;
  right: -5%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(52, 152, 219, 0.08) 0%, transparent 70%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 100%;
  opacity: 0;
  transform: translateY(20px);
  transition: 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero-content.reveal { opacity: 1; transform: translateY(0); }

.badge {
  color: #3498db;
  background: #ebf5fb;
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.hero-content h1 {
  font-size: 4rem;
  color: #2c3e50;
  margin: 30px 0;
  line-height: 1.1;
  font-weight: 800;
}

.hero-content h1 span { color: #3498db; }

.hero-content p {
  font-size: 1.25rem;
  color: #5d6d7e;
  line-height: 1.7;
  margin-bottom: 45px;
}

/* Trust Bar Centering */
.trust-bar {
  padding: 60px 0;
  border-top: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
  text-align: center;
}

.trust-title {
  font-size: 0.75rem;
  font-weight: 800;
  color: #94a3b8;
  letter-spacing: 3px;
  margin-bottom: 30px;
}

.logo-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  font-size: 2.5rem;
  color: #cbd5e1;
}

/* Section Centering */
.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
}

.section-title {
  font-size: 2.5rem;
  color: #2c3e50;
  font-weight: 800;
}

.title-line {
  width: 60px;
  height: 4px;
  background: #3498db;
  margin: 15px auto 20px;
  border-radius: 2px;
}

.section-subtitle {
  color: #7f8c8d;
  font-size: 1.1rem;
}

/* Grid Symmetry */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.service-card-light {
  padding: 40px;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #f1f5f9;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.service-card-light:hover {
  border-color: #3498db;
  box-shadow: 0 20px 40px rgba(0,0,0,0.06);
  transform: translateY(-5px);
}

.icon-box {
  width: 55px;
  height: 55px;
  background: #ebf5fb;
  color: #3498db;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 1.6rem;
  margin-bottom: 25px;
}

.stats-grid {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 80px 0;
}

.stat-box .num { font-size: 3.2rem; font-weight: 800; color: #2c3e50; }
.stat-box .txt { color: #3498db; font-weight: 700; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; }

/* Global Buttons Refinement */
.btn {
  padding: 18px 36px;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
  transition: 0.3s;
}

.btn-primary { background: #3498db; color: white; box-shadow: 0 8px 20px rgba(52, 152, 219, 0.2); }
.btn-secondary { background: #f8fafc; color: #2c3e50; margin-left: 20px; border: 1px solid #e2e8f0; }

@media (max-width: 768px) {
  .hero-content h1 { font-size: 2.8rem; }
  .logo-flex { gap: 30px; flex-wrap: wrap; }
  .stats-grid { flex-direction: column; gap: 50px; }
  .btn-secondary { margin-left: 0; margin-top: 15px; width: 100%; text-align: center; }
  .btn-primary { width: 100%; text-align: center; }
}
</style>