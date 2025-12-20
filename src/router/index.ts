import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../AppHome.vue' // Импортируйте AppHome

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome, // Используйте напрямую
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../Dashboard.vue'), // Динамический импорт
  },
  {
    path: '/edit-search/:id',
    name: 'EditSearch',
    component: () => import('../EditSearch.vue'),
    props: true,
  },
  {
    path: '/:catchAll(.*)', // 404 страница
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return savedPosition || { top: 0 }
  },
})

export default router
