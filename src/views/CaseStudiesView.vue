<script setup>
// 1. Import the projects data
import projects from '@/assets/data/projects.json';

const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  try {
    return require(`@/assets/${path}`);
  } catch (e) {
    console.error("Project image not found:", path);
    return '';
  }
};
</script>

<template>
  <div class="case-studies-page">
    <section class="cases-hero">
      <div class="container"> 
        <div class="hero-content">
          <span class="badge">Success Stories</span>
          <h1>Proven <span>Results</span></h1>
          <div class="h-line"></div>
          <p>Explore how NadiriTech has helped businesses achieve digital excellence through custom engineering.</p>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-full"> 
        <div class="cases-grid">
          <div v-for="project in projects" :key="project.id" class="case-card">
            <div class="case-image">
              <img :src="getImageUrl(project.image)" :alt="project.title">
              <div class="case-overlay">
                <router-link :to="`/case-studies/${project.id}`" class="view-btn">View Case Study</router-link>
              </div>
            </div>
            <div class="case-info">
              <span class="client-name">{{ project.client }}</span>
              <h3>{{ project.title }}</h3>
              <div class="case-tags">
                <span v-for="tag in project.tags" :key="tag">{{ tag }} </span>
              </div>
              <div class="case-outcome">
                <i class="fas fa-check-circle"></i>
                <span><strong>Outcome:</strong> {{ project.outcome }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>Have a similar challenge?</h2>
        <p>Let's build a solution tailored to your business goals.</p>
        <router-link to="/contact" class="btn btn-primary">Start a Consultation</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.case-studies-page {
  width: 100%;
}

/* This allows the grid to touch the edges */
.container-full {
  width: 100%;
  padding: 0 40px; /* Side padding so cards don't touch the glass of the screen */
}

.cases-hero {
  padding: 160px 0 60px;
  background: var(--white);
  text-align: center;
  border-bottom: 1px solid var(--border);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.h-line {
  width: 50px;
  height: 4px;
  background: var(--primary);
  margin: 0 auto 25px;
}

/* Grid Configuration for 100% Stretch */
.cases-grid {
  display: grid;
  /* repeat(auto-fit, 1fr) forces the cards to stretch and fill the whole width */
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  width: 100%;
}

.case-card {
  background: var(--white);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
}

.case-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow);
  border-color: var(--primary);
}

.case-image {
  position: relative;
  height: 280px;
}

.case-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(44, 62, 80, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.3s;
}

.case-card:hover .case-overlay { opacity: 1; }

.case-info {
  padding: 30px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.client-name { color: var(--primary); font-weight: 800; font-size: 0.75rem; letter-spacing: 1px; }

.case-outcome {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid var(--border);
  color: var(--success);
}

.cta-section {
  text-align: center;
  padding: 100px 0;
  background: var(--bg-light);
}

@media (max-width: 768px) {
  .container-full { padding: 0 20px; }
  .cases-grid { grid-template-columns: 1fr; }
}
</style>