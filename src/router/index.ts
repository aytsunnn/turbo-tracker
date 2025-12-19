import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Dashboard from '../Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }, // можно добавить защиту
  },
]

export default router
