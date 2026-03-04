<script setup>
const detailedSolutions = [
  {
    title: 'Enterprise Web Development',
    icon: 'fas fa-code-branch',
    features: ['Vue.js & React Frameworks', 'Scalable Architecture', 'Performance Optimization']
  },
  {
    title: 'Full-Stack Engineering',
    icon: 'fas fa-database',
    features: ['Node.js & Python Backends', 'API Development', 'Database Management']
  },
  {
    title: 'Cloud & DevOps',
    icon: 'fas fa-server',
    features: ['AWS/Azure Integration', 'CI/CD Pipelines', 'Docker & Kubernetes']
  },
  {
    title: 'Digital Transformation',
    icon: 'fas fa-lightbulb',
    features: ['Legacy System Migration', 'Workflow Automation', 'Tech Consulting']
  }
];
</script>

<template>
  <div class="solutions-page">
    <header class="solutions-header">
      <div class="container">
        <div class="hero-content">
          <span class="badge">Professional Services</span>
          <h1>Our <span>Solutions</span></h1>
          <div class="h-line"></div>
          <p>Expert-led technology services designed to scale your business operations and enhance digital presence.</p>
        </div>
      </div>
    </header>

    <section class="section-padding bg-white">
      <div class="container-full">
        <div class="solutions-grid">
          <div v-for="item in detailedSolutions" :key="item.title" class="solution-card card-glass">
            <div class="card-top">
              <div class="card-icon"><i :class="item.icon"></i></div>
              <h3>{{ item.title }}</h3>
            </div>
            <div class="feature-list">
              <ul>
                <li v-for="feature in item.features" :key="feature">
                  <i class="fas fa-chevron-right"></i> {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="process-section section-padding">
      <div class="container-full">
        <div class="text-center mb-80">
          <h2 class="section-title">The NadiriTech Process</h2>
          <div class="h-line"></div>
        </div>
        
        <div class="process-timeline">
          <div class="step">
            <div class="step-num">01</div> 
            <div class="step-content">
              <h4>Discovery</h4>
              <p>We analyze your business ecosystem to identify technical gaps and opportunities.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">02</div> 
            <div class="step-content">
              <h4>Strategy</h4>
              <p>Crafting a roadmap with focus on scalability, security, and user experience.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">03</div> 
            <div class="step-content">
              <h4>Development</h4>
              <p>Agile engineering with transparent communication and frequent code reviews.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">04</div> 
            <div class="step-content">
              <h4>Deployment</h4>
              <p>Seamless transition to production with continuous 24/7 monitoring.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.solutions-page { width: 100%; }

.container-full {
  width: 100%;
  padding: 0 5%; /* Fluid percentage padding for ultra-wide screens */
}

.solutions-header {
  padding: 180px 0 80px;
  background: var(--white);
  text-align: center;
}

.h-line {
  width: 40px;
  height: 4px;
  background: var(--primary);
  margin: 20px auto;
  border-radius: 2px;
}

/* Grid Design */
.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.solution-card {
  padding: 60px 40px;
  border: 1px solid var(--border);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
}

.card-icon {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 25px;
  opacity: 0.9;
}

.solution-card h3 {
  font-size: 1.6rem;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
}

.feature-list ul { list-style: none; padding: 0; }
.feature-list ul li {
  margin-bottom: 15px;
  font-size: 1rem;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 15px;
}

.feature-list i {
  color: var(--primary);
  font-size: 0.7rem;
}

/* Timeline Aesthetics */
.process-section { background: #fdfdfd; border-top: 1px solid var(--border); }

.mb-80 { margin-bottom: 80px; }

.process-timeline {
  display: flex;
  justify-content: space-between;
  position: relative;
  gap: 20px;
}

.step {
  flex: 1;
  text-align: left;
  padding: 20px;
}

.step-num {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: -25px;
  font-family: 'Inter', sans-serif;
}

.step-content h4 {
  font-size: 1.4rem;
  color: var(--secondary);
  position: relative;
  margin-bottom: 15px;
}

.step-content p {
  color: var(--text-main);
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 992px) {
  .process-timeline { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; }
}

@media (max-width: 768px) {
  .process-timeline { grid-template-columns: 1fr; }
  .solutions-header h1 { font-size: 2.8rem; }
  .container-full { padding: 0 20px; }
}
</style>