import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuizView from '../views/QuizView.vue'
import UsView from '../views/UsView.vue'
import BlogView from '../views/BlogView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import GiftIdeaView from "../views/GiftIdeaView.vue"
const router = createRouter({
 
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/quiz',
      name: 'quiz',
      meta: { transition: 'slide-left' },
      component: () => import('../views/QuizView.vue'),
    },
    {
      path: '/us',
      name: 'us',
      meta: { transition: 'slide-left' },
      component: () => import('../views/UsView.vue'),
    },{
      path: '/blog',
      name: 'blog',
      meta: { transition: 'slide-left' },
      component: () => import('../views/BlogView.vue'),
    },{
      path: '/contact',
      name: 'contact',
      meta: { transition: 'slide-left' },
      component: () => import('../views/ContactView.vue'),
    },{
      path: '/projects',
      name: 'projects',
      meta: { transition: 'slide-left' },
      component: () => import('../views/ProjectsView.vue'),
    },{
      path: '/gift',
      name: 'gift',
      meta: { transition: 'slide-left' },
      component: () => import('../views/GiftIdeaView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({behavior: 'smooth' })
      }, 1500)
    })
  },
})

export default router
