<script setup>
import { computed } from 'vue';
import projects from '@/assets/data/projects.json';

// Props received from the router (:id)
const props = defineProps(['id']);

// Professional lookup logic from JSON
const project = computed(() => {
  // Find the project matching the ID from the URL
  const found = projects.find(p => p.id === parseInt(props.id));
  
  // Return found project or a professional fallback
  return found || {
    title: 'Project Case Study',
    client: 'NadiriTech Client',
    overview: 'This project detail is currently being finalized.',
    results: ['Quantifiable results loading...'],
    tech: ['In Progress']
  };
});
</script>

<template>
  <div class="detail-view">
    <header class="detail-hero">
      <div class="container">
        <router-link to="/case-studies" class="back-nav">
          <i class="fas fa-arrow-left"></i> All Case Studies
        </router-link>
        <div class="hero-content-centered">
          <span class="client-label">{{ project.client }}</span>
          <h1>{{ project.title }}</h1>
          <div class="h-line"></div>
        </div>
      </div>
    </header>

    <main class="section-padding">
      <div class="container">
        <div class="content-layout">
          <article class="narrative">
            <section class="narrative-section">
              <h3>The Challenge & Solution</h3>
              <p>{{ project.overview }}</p>
            </section>
            
            <section class="narrative-section">
              <div class="outcome-card">
                <h4>Quantifiable Results</h4>
                <ul>
                  <li v-for="res in project.results" :key="res">
                    <i class="fas fa-chart-line"></i> {{ res }}
                  </li>
                </ul>
              </div>
            </section>
          </article>
          
          <aside class="project-meta">
            <div class="sticky-meta">
              <h4>Technology Stack</h4>
              <div class="tech-grid">
                <span v-for="t in project.tech" :key="t" class="tech-tag">{{ t }}</span>
              </div>
              <router-link to="/contact" class="btn-sidebar">Start Similar Project</router-link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Styles remain identical to your original design */
.detail-hero {
  padding: 140px 0 60px;
  background: #ffffff;
  border-bottom: 1px solid #f1f5f9;
}

.back-nav {
  text-decoration: none;
  color: #3498db;
  font-weight: 700;
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 30px;
}

.hero-content-centered {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.client-label {
  color: #3498db;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.hero-content-centered h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin: 15px 0;
  font-weight: 800;
}

.h-line {
  width: 50px;
  height: 4px;
  background: #3498db;
  margin: 0 auto;
  border-radius: 2px;
}

.content-layout {
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 80px;
}

.narrative-section h3 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.narrative-section p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #5d6d7e;
  margin-bottom: 40px;
}

.outcome-card {
  background: #f8fafc;
  padding: 40px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
}

.outcome-card h4 { margin-bottom: 20px; color: #1e293b; }
.outcome-card ul { list-style: none; padding: 0; }
.outcome-card ul li {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  color: #2c3e50;
}
.outcome-card ul li i { color: #27ae60; }

.sticky-meta { position: sticky; top: 120px; }
.tech-grid { display: flex; flex-wrap: wrap; gap: 10px; margin: 20px 0 40px; }
.tech-tag {
  background: #ebf5fb;
  color: #3498db;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.85rem;
}

.btn-sidebar {
  display: block;
  text-align: center;
  background: #2c3e50;
  color: white;
  text-decoration: none;
  padding: 18px;
  border-radius: 8px;
  font-weight: 700;
  transition: 0.3s;
}

.btn-sidebar:hover { background: #3498db; }

@media (max-width: 992px) {
  .content-layout { grid-template-columns: 1fr; gap: 40px; }
  .detail-hero h1 { font-size: 2.2rem; }
}
</style>