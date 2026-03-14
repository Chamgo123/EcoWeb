import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuiaView from '../views/GuiaView.vue' 

const routes = [
  { path: '/', component: HomeView },
  { path: '/guia', component: GuiaView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router