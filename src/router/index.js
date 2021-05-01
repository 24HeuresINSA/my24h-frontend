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
    path: '/inscriptions',
    name : 'Inscriptions',
    component: () => import('../views/Inscriptions')
  },
  {
    path: '/team',
    name : 'Team',
    component: () => import('../views/Team')
  },
  {
    path: '/sponsors',
    name: 'Sponsors',
    component: () => import('../views/Sponsors.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard')
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import('../views/Activite')
  },
  {
    path: '/strava',
    name: 'Strava',
    component: () => import('../views/PageStrava')
  },
  {
    path: '/modifProfile',
    name: 'ModifProfile',
    component: () => import('../views/ModifProfil')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/manageTeam',
    name: "ManageTeam",
    component: () => import('../views/ManageTeam')
  },
  {
    path: '*',
    component: () => import('../views/404')
  }
]

const router = new VueRouter({
  routes
})

export default router
