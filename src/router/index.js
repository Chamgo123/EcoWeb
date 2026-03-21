import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuiaView from '../views/GuiaView.vue' 

const routes = [
  { path: '/', component: HomeView },
  {
    path: '/guia',
    name: 'guia',
    component: () => import('../views/GuiaView.vue')
  },
  { path: '/mapa', component: () => import('../views/MapaView.vue') },
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/InfoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router