import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'NadiriTechSolutions | Home' }
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import('../views/SolutionsView.vue'),
    meta: { title: 'Our Solutions | NadiriTech' }
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: () => import('../views/CaseStudiesView.vue'),
    meta: { title: 'Case Studies | Success Stories' }
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: () => import('../views/CaseStudiesView.vue'),
    meta: { title: 'Case Studies | Success Stories' }
  },
  {
    path: '/case-studies/:id', // Dynamic parameter :id
    name: 'CaseStudyDetail',
    component: () => import('../views/CaseStudyDetailView.vue'),
    props: true, // Allows the ID to be passed as a prop to the component
    meta: { title: 'Project Details | NadiriTech' }
  },
  {
    
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: 'Get a Quote | Contact Us' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'NadiriTechSolutions'
  next()
})

export default router