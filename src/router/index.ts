import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

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
]

export default router
