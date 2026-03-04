<script setup>
// Helper to resolve images from assets or URLs
const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  try {
    return require(`@/assets/${path}`);
  } catch (e) {
    console.error("Blog image not found:", path);
    return ''; 
  }
};

const blogPosts = [
  { id: 1, title: 'The Future of Cloud Computing', excerpt: 'How serverless architecture is changing the way we deploy enterprise applications.', date: 'Oct 12, 2025', category: 'Cloud', image: 'blog-cloud.jpg' },
  { id: 2, title: 'Vue 3 vs React in 2026', excerpt: 'A deep dive into performance, developer experience, and ecosystem growth.', date: 'Nov 05, 2025', category: 'Frontend', image: 'blog-vue.jpg' },
  { id: 3, title: 'Securing Your Spring Boot API', excerpt: 'Best practices for implementing JWT and OAuth2 in modern Java backends.', date: 'Dec 01, 2025', category: 'Security', image: 'blog-security.jpg' }
];
</script>

<template>
  <div class="blog-page">
    <section class="blog-hero">
      <div class="container">
        <div class="hero-content">
          <span class="badge">Insights & Updates</span>
          <h1>Engineering <span>Perspectives</span></h1>
          <div class="h-line"></div>
          <p>Stay updated with the latest trends in software engineering, cloud architecture, and digital transformation.</p>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-full">
        <div class="blog-grid">
          <div v-for="post in blogPosts" :key="post.id" class="blog-card">
            <div class="blog-image">
              <img :src="getImageUrl(post.image)" :alt="post.title">
              <span class="category-tag">{{ post.category }}</span>
            </div>
            <div class="blog-info">
              <span class="post-date">{{ post.date }}</span>
              <h3>{{ post.title }}</h3>
              <p>{{ post.excerpt }}</p>
              <div class="blog-footer">
                <router-link :to="`/blog/${post.id}`" class="read-more">
                  Read Article <i class="fas fa-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="newsletter-section">
      <div class="container">
        <h2>Subscribe to Insights</h2>
        <p>Get our latest technical articles delivered directly to your inbox.</p>
        <div class="subscribe-form">
          <input type="email" placeholder="Enter your email">
          <button class="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-page { width: 100%; }
.container-full { width: 100%; padding: 0 40px; }

.blog-hero {
  padding: 160px 0 60px;
  background: var(--white);
  text-align: center;
  border-bottom: 1px solid var(--border);
}

.hero-content { max-width: 800px; margin: 0 auto; }
.h-line { width: 50px; height: 4px; background: var(--primary); margin: 0 auto 25px; }

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  width: 100%;
}

.blog-card {
  background: var(--white);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow);
  border-color: var(--primary);
}

.blog-image { position: relative; height: 240px; }
.blog-image img { width: 100%; height: 100%; object-fit: cover; }

.category-tag {
  position: absolute;
  top: 15px; left: 15px;
  background: var(--primary);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.blog-info { padding: 30px; flex-grow: 1; display: flex; flex-direction: column; }
.post-date { color: var(--text-muted); font-size: 0.85rem; margin-bottom: 10px; }
.blog-info h3 { margin-bottom: 15px; font-size: 1.4rem; line-height: 1.3; }
.blog-info p { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px; }

.blog-footer { margin-top: auto; padding-top: 20px; border-top: 1px solid var(--border); }
.read-more { color: var(--primary); font-weight: 700; text-decoration: none; display: flex; align-items: center; gap: 8px; }

.newsletter-section { text-align: center; padding: 80px 0; background: var(--bg-light); }
.subscribe-form { max-width: 500px; margin: 30px auto 0; display: flex; gap: 10px; }
.subscribe-form input { flex: 1; padding: 12px 20px; border-radius: 8px; border: 1px solid var(--border); }

@media (max-width: 768px) {
  .container-full { padding: 0 20px; }
  .subscribe-form { flex-direction: column; }
}
</style>