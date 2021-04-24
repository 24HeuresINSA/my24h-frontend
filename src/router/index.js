import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/FAQ.vue')
  },
  {
    path: '/reglement',
    name: 'Reglement',
    component: () => import('../views/Reglement.vue')
  },
  {
    path: '/sponsors',
    name: 'Sponsors',
    component: () => import('../views/Sponsors.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
