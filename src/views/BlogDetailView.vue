<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
// 1. Import your centralized JSON data
import blogPosts from '@/assets/data/blogs.json';

const route = useRoute();

// 2. Find the specific post based on the ID in the URL
const blog = computed(() => {
  const blogId = parseInt(route.params.id);
  return blogPosts.find(post => post.id === blogId);
});

// Helper for images (consistent with your other views)
const getImageUrl = (path) => {
  if (!path) return '';
  try {
    return require(`@/assets/blog/${path}`);
  } catch (e) {
    return '';
  }
};
</script>

<template>
  <div class="blog-detail-page" v-if="blog">
    <div class="container">
      <router-link to="/blog" class="back-link">
        <i class="fas fa-arrow-left"></i> Back to Insights
      </router-link>

      <article class="blog-article">
        <div class="article-header">
          <span class="badge">{{ blog.category }}</span>
          <span class="date">{{ blog.date }}</span>
          <h1>{{ blog.title }}</h1>
          <div class="h-line"></div>
        </div>

        <div class="featured-image" v-if="blog.image">
          <img :src="getImageUrl(blog.image)" :alt="blog.title">
        </div>

        <div class="content-body" v-html="blog.content"></div>
      </article>
    </div>
  </div>

  <div v-else class="not-found-container">
    <div class="container text-center">
      <h2>Article Not Found</h2>
      <p>The technical insight you are looking for may have been moved or archived.</p>
      <router-link to="/blog" class="btn btn-primary">Return to Blog</router-link>
    </div>
  </div>
</template>

<style scoped>
.blog-detail-page {
  padding: 160px 0 100px;
  background: var(--white);
}

.back-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
  transition: transform 0.3s;
}

.back-link:hover { transform: translateX(-5px); }

.blog-article { max-width: 900px; margin: 0 auto; }

.article-header { text-align: left; margin-bottom: 40px; }

.badge {
  background: var(--bg-light);
  color: var(--primary);
  padding: 6px 15px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: 15px;
}

.date { color: var(--text-muted); font-size: 0.9rem; }

h1 {
  font-size: 3.5rem;
  color: var(--secondary);
  margin: 25px 0;
  line-height: 1.1;
}

.h-line {
  width: 80px;
  height: 5px;
  background: var(--primary);
  margin: 0;
}

.featured-image {
  width: 100%;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 50px;
  box-shadow: var(--shadow);
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-body {
  line-height: 1.8;
  font-size: 1.2rem;
  color: var(--text-secondary);
  white-space: pre-line; /* Preserves line breaks from JSON */
}

.not-found-container { padding: 200px 0; min-height: 80vh; }

@media (max-width: 768px) {
  h1 { font-size: 2.5rem; }
  .featured-image { height: 250px; }
}
</style>